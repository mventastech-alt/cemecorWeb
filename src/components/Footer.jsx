import { ASSETS, CONTACT_LINKS } from "../constants.js";

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

export default function Footer() {
  return (
    <>
      <FinalCallToAction />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img className="footer-logo" src={ASSETS.logo} alt="Logo CEMECOR" />
            <h3 className="footer-title">CEMECOR</h3>
            <p>Fundación de mujeres Emprendedoras y Empresarias · Córdoba, Argentina</p>
            <p className="footer-copy">Enseñar, crecer y comunicar.</p>
          </div>
          <div>
            <h4>Secciones</h4>
            <div className="footer-links">
              <a href="#fundacion">Fundación</a>
              <a href="#historia">Nuestra historia</a>
            </div>
          </div>
          <div>
            <h4>Comunidad</h4>
            <div className="footer-links">
              <a href="#plataforma">Plataforma</a>
              <a href="#contacto">Sumarme</a>
              <a href="#faq">Preguntas frecuentes</a>
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer-links">
              <a href={CONTACT_LINKS.whatsappUrl}>{CONTACT_LINKS.whatsappLabel}</a>
              <a href={CONTACT_LINKS.instagramUrl}>{CONTACT_LINKS.instagramLabel}</a>
              <a href={CONTACT_LINKS.emailUrl}>{CONTACT_LINKS.email}</a>
            </div>
          </div>
        </div>
        <div className="container legal">
          CEMECOR · Córdoba, Argentina. Todos los derechos reservados. Sitio creado por{" "}
          <a href="https://enjoysti.com.ar">EnjoySTI</a>.
        </div>
      </footer>
    </>
  );
}
