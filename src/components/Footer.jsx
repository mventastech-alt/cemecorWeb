import { useEffect, useState } from "react";
import { APP_PATHS, CONTACT_LINKS, appLink } from "../constants.js";
import BrandLockup from "./BrandLockup.jsx";
import BrandSwoosh from "./BrandSwoosh.jsx";
import { ArrowRight, Instagram, Mail, WhatsApp } from "./icons.jsx";

const legalParagraphs = [
  "La aplicación CEMECOR y Web fundacioncemecor.com.ar es una plataforma tecnológica desarrollada, administrada y operada por EnjoySTI, en el marco de un convenio de colaboración tecnológica con Fundación CEMECOR.",
  "EnjoySTI brinda a Fundación CEMECOR servicios tecnológicos, soporte digital y herramientas de gestión sin cargo para la Fundación, atento a su carácter institucional y a que se trata de una organización en etapa inicial.",
  "El abono que realizan las usuarias dentro de la aplicación corresponde exclusivamente al uso del servicio digital provisto por EnjoySTI, incluyendo el acceso a las funcionalidades, herramientas, beneficios operativos y utilidades disponibles dentro de la plataforma.",
  "Dicho importe no constituye una donación, cuota social, aporte institucional, contribución solidaria ni ingreso destinado a Fundación CEMECOR. Fundación CEMECOR no percibe, administra ni recibe los importes abonados por el uso de la aplicación.",
  "El valor actual del servicio digital es de $12.000. Este importe corresponde únicamente al servicio prestado por EnjoySTI y podrá ser actualizado en el futuro, previa comunicación dentro de la plataforma o por los medios habilitados.",
  "Proveedor del servicio digital: EnjoySTI.",
  "La contratación, adhesión o pago del servicio digital implica que la usuaria declara haber leído, comprendido y aceptado las presentes condiciones.",
];

function FinalCallToAction() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg" aria-hidden="true">
        <img src="/assets/hero-cemecor-grupo.png" alt="" loading="lazy" />
      </div>
      <BrandSwoosh className="final-swoosh" />
      <div className="container final-cta-inner" data-reveal>
        <h2 className="display display-light">
          Emprender y liderar <em>acompañada</em> transforma el camino
        </h2>
        <p className="lead lead-light">
          Sumate a una comunidad de mujeres que enseña, crece, comunica y acompaña.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href={appLink(APP_PATHS.signup, "final-sumate")}>
            Quiero ser miembra
            <ArrowRight />
          </a>
          <a className="btn btn-glass btn-lg" href="#contacto">
            Escribinos
          </a>
        </div>
      </div>
    </section>
  );
}

function LegalModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="legal-backdrop" onClick={onClose} role="presentation">
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="legal-head">
          <h2 id="legal-modal-title">Legales y condiciones del servicio digital</h2>
          <button className="legal-close" type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>
        <div className="legal-body">
          {legalParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <>
      <FinalCallToAction />
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandLockup className="brand-lockup-footer" />
            <p className="footer-motto">Enseñar, crecer y comunicar.</p>
          </div>
          <div>
            <h4>La Fundación</h4>
            <a href="#fundacion">Qué es CEMECOR</a>
            <a href="#fundadora">Fundadora</a>
            <a href="#que-hacemos">Qué hacemos</a>
            <a href="#cuota">Cuota social</a>
            <a href="#sponsors">Sponsors</a>
          </div>
          <div>
            <h4>Plataforma</h4>
            <a href={appLink(APP_PATHS.signup, "footer-sumate")}>Quiero ser miembra</a>
            <a href={appLink(APP_PATHS.guest, "footer-invitada")}>Ver como invitada</a>
            <a href={appLink(APP_PATHS.login, "footer-ingresar")}>Ingresar</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <a className="footer-social" href={CONTACT_LINKS.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsApp /> WhatsApp
            </a>
            <a className="footer-social" href={CONTACT_LINKS.instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram /> Instagram
            </a>
            <a className="footer-social" href={CONTACT_LINKS.emailUrl}>
              <Mail /> {CONTACT_LINKS.email}
            </a>
          </div>
        </div>
        <div className="container footer-legal">
          <span>
            © {new Date().getFullYear()} CEMECOR · Córdoba, Argentina. Sitio creado por{" "}
            <a href="https://enjoysti.com.ar">EnjoySTI</a>.
          </span>
          <button className="legal-link" type="button" onClick={() => setIsLegalOpen(true)}>
            Legales y condiciones del servicio
          </button>
        </div>
      </footer>
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </>
  );
}
