import { CONTACT_LINKS } from "../constants.js";
import { useEffect, useState } from "react";

const legalParagraphs = [
  "La aplicación CEMECOR y Web fundacioncemecor.com.ar es una plataforma tecnológica desarrollada, administrada y operada por EnjoySTI, en el marco de un convenio de colaboración tecnológica con Fundación CEMECOR.",
  "EnjoySTI brinda a Fundación CEMECOR servicios tecnológicos, soporte digital y herramientas de gestión sin cargo para la Fundación, atento a su carácter institucional y a que se trata de una organización en etapa inicial.",
  "El abono que realizan las usuarias dentro de la aplicación corresponde exclusivamente al uso del servicio digital provisto por EnjoySTI, incluyendo el acceso a las funcionalidades, herramientas, beneficios operativos y utilidades disponibles dentro de la plataforma.",
  "Dicho importe no constituye una donación, cuota social, aporte institucional, contribución solidaria ni ingreso destinado a Fundación CEMECOR. Fundación CEMECOR no percibe, administra ni recibe los importes abonados por el uso de la aplicación.",
  "El valor actual del servicio digital es de $12.000. Este importe corresponde únicamente al servicio prestado por EnjoySTI y podrá ser actualizado en el futuro, previa comunicación dentro de la plataforma o por los medios habilitados.",
  "Proveedor del servicio digital: EnjoySTI.",
  "La contratación, adhesión o pago del servicio digital implica que la usuaria declara haber leído, comprendido y aceptado las presentes condiciones.",
];

const contactItems = [
  {
    href: CONTACT_LINKS.whatsappUrl,
    label: CONTACT_LINKS.whatsappLabel,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 3.5a8.45 8.45 0 0 0-7.18 12.9l-1.02 3.73 3.82-1a8.43 8.43 0 0 0 4.38 1.22h.01a8.43 8.43 0 0 0-.01-16.85Zm0 15.42a6.98 6.98 0 0 1-3.56-.98l-.26-.15-2.26.6.6-2.2-.17-.28a6.98 6.98 0 1 1 5.65 3.01Zm3.82-5.23c-.2-.1-1.23-.61-1.42-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.67.82-.12.14-.25.16-.46.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.42.09-.09.21-.25.31-.37.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.13-.64-1.55-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.37.05-.56.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.1.14 1.47 2.25 3.57 3.15.5.22.89.35 1.19.44.5.16.96.14 1.32.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.05-.09-.19-.14-.4-.25Z" />
      </svg>
    ),
  },
  {
    href: CONTACT_LINKS.instagramUrl,
    label: CONTACT_LINKS.instagramLabel,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3.75h8A4.26 4.26 0 0 1 20.25 8v8A4.26 4.26 0 0 1 16 20.25H8A4.26 4.26 0 0 1 3.75 16V8A4.26 4.26 0 0 1 8 3.75Zm0 1.5A2.75 2.75 0 0 0 5.25 8v8A2.75 2.75 0 0 0 8 18.75h8A2.75 2.75 0 0 0 18.75 16V8A2.75 2.75 0 0 0 16 5.25H8Zm4 3.37A3.38 3.38 0 1 1 12 15.37 3.38 3.38 0 0 1 12 8.62Zm0 1.5a1.88 1.88 0 1 0 0 3.75 1.88 1.88 0 0 0 0-3.75Zm4.08-2.18a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" />
      </svg>
    ),
  },
  {
    href: CONTACT_LINKS.emailUrl,
    label: CONTACT_LINKS.email,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.75h14A2.25 2.25 0 0 1 21.25 8v8A2.25 2.25 0 0 1 19 18.25H5A2.25 2.25 0 0 1 2.75 16V8A2.25 2.25 0 0 1 5 5.75Zm0 1.5c-.2 0-.38.05-.54.15l7.08 5.06c.28.2.66.2.93 0l7.08-5.06A1 1 0 0 0 19 7.25H5Zm14.75 1.62-6.4 4.57a2.3 2.3 0 0 1-2.7 0l-6.4-4.57V16c0 .41.34.75.75.75h14c.41 0 .75-.34.75-.75V8.87Z" />
      </svg>
    ),
  },
];

function FinalCallToAction() {
  return (
    <section className="final-cta">
      <div className="container final-box">
        <div>
          <h2>Emprender y liderar acompañada transforma el camino</h2>
          <p>Sumate a una comunidad de mujeres que enseña, crece, comunica y acompaña.</p>
        </div>
        <div className="hero-actions">
          <a className="btn primary" href="#contacto">
            Quiero sumarme
          </a>
          <a className="btn light" href={CONTACT_LINKS.platformUrl}>
            Ingresar a la plataforma
          </a>
        </div>
      </div>
    </section>
  );
}

function LegalModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="legal-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="legal-modal-header">
          <h2 id="legal-modal-title">Legales y condiciones del servicio digital</h2>
          <button className="legal-modal-close" type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>
        <div className="legal-modal-body">
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
          <div>
            <h3 className="footer-title">CEMECOR</h3>
            <p>Fundación de mujeres Emprendedoras y Empresarias · Córdoba, Argentina</p>
            <p className="footer-copy">Enseñar, crecer y comunicar.</p>
          </div>
          <div>
            <h4>Secciones</h4>
            <div className="footer-links">
              <a href="#fundacion">Fundación</a>
              <a href="#plataforma">Plataforma</a>
            </div>
          </div>
          <div>
            <h4>Comunidad</h4>
            <div className="footer-links">
              <a href="#plataforma">Plataforma</a>
              <a href="#contacto">Sumarme</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer-links">
              {contactItems.map((item) => (
                <a className="footer-social-link" href={item.href} key={item.label}>
                  <span className="footer-social-icon">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container legal">
          <span>
            CEMECOR · Córdoba, Argentina. Todos los derechos reservados. Sitio creado por{" "}
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
