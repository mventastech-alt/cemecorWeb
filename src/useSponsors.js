import { useEffect, useState } from "react";
import { SPONSORS } from "./constants.js";

const SPONSORS_URL =
  "https://firestore.googleapis.com/v1/projects/cemecorcba/databases/(default)/documents/sponsors?pageSize=300";

const TIER_RANK = { oro: 0, plata: 1, bronce: 2 };

function readField(field) {
  if (!field) return undefined;
  if ("stringValue" in field) return field.stringValue;
  if ("integerValue" in field) return Number(field.integerValue);
  if ("doubleValue" in field) return field.doubleValue;
  if ("booleanValue" in field) return field.booleanValue;
  if ("timestampValue" in field) return new Date(field.timestampValue);
  return undefined;
}

function parseSponsor(doc) {
  const f = doc.fields || {};
  const name = String(readField(f.nombre) || "").trim();
  const logo = String(readField(f.imagenUrl) || "").trim();
  if (!name || !logo) return null;
  const tier = String(readField(f.tier) || "plata").toLowerCase();
  return {
    name,
    logo,
    link: String(readField(f.link) || "").trim(),
    tier: tier in TIER_RANK ? tier : "plata",
    orden: Number(readField(f.orden)) || 0,
    activo: readField(f.activo) !== false,
    desde: readField(f.desde) || null,
    hasta: readField(f.hasta) || null,
  };
}

/** Mismo criterio de vigencia que `isSponsorVigente` en la app. */
function isVigente(sponsor, now = new Date()) {
  if (!sponsor.activo) return false;
  if (sponsor.desde && sponsor.desde > now) return false;
  if (sponsor.hasta) {
    const end = new Date(sponsor.hasta);
    end.setHours(23, 59, 59, 999);
    if (end < now) return false;
  }
  return true;
}

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const LOCAL_LOGOS = new Map(SPONSORS.map((sponsor) => [normalize(sponsor.name), sponsor]));

/** Las imágenes subidas en la app suelen traer mucho margen; si hay un logo recortado local, se usa ese. */
function withLocalLogo(sponsor) {
  const local = LOCAL_LOGOS.get(normalize(sponsor.name));
  return local ? { ...sponsor, logo: local.logo, wide: local.wide } : sponsor;
}

let cache = null;

async function loadSponsors() {
  if (!cache) {
    cache = fetch(SPONSORS_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) =>
        (data.documents || [])
          .map(parseSponsor)
          .filter((sponsor) => sponsor && isVigente(sponsor))
          .sort((a, b) => TIER_RANK[a.tier] - TIER_RANK[b.tier] || a.orden - b.orden)
          .map(withLocalLogo)
      )
      .catch((error) => {
        cache = null;
        throw error;
      });
  }
  return cache;
}

/** Sponsors cargados en la app CEMECOR; usa la lista local mientras carga o si falla. */
export function useSponsors() {
  const [sponsors, setSponsors] = useState(SPONSORS);

  useEffect(() => {
    let alive = true;
    loadSponsors()
      .then((rows) => {
        if (alive && rows.length) setSponsors(rows);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return sponsors;
}
