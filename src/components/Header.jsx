import { useEffect, useState } from "react";
import { APP_PATHS, appLink } from "../constants.js";
import BrandLockup from "./BrandLockup.jsx";

const NAV = [
  { href: "#fundacion", label: "La Fundación" },
  { href: "#fundadora", label: "Fundadora" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#cuota", label: "Cuota social" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container header-bar">
        <a className="brand" href="#inicio" onClick={close} aria-label="CEMECOR, ir al inicio">
          <BrandLockup />
        </a>

        <nav className="header-nav" aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost btn-sm" href={appLink(APP_PATHS.login, "header-ingresar")}>
            Ingresar
          </a>
          <a className="btn btn-primary btn-sm" href="#cuota">
            Sumate
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a className="btn btn-primary" href="#cuota" onClick={close}>
            Sumate a la Fundación
          </a>
          <a className="btn btn-glass" href={appLink(APP_PATHS.login, "menu-ingresar")}>
            Ya soy miembra · Ingresar
          </a>
        </div>
      </div>
    </header>
  );
}
