import { ASSETS } from "../constants.js";

const tags = [
  "Perfil de miembra",
  "Directorio",
  "Agenda",
  "Capacitaciones",
  "Novedades",
  "Diamantes",
  "QR de participación",
];

const appRows = [
  { icon: "◎", label: "Perfil de miembra" },
  { icon: "▣", label: "Directorio de integrantes" },
  { icon: "✎", label: "Capacitaciones" },
  { icon: "✦", label: "Diamantes" },
  { icon: "⌁", label: "Novedades y agenda" },
];

export default function Plataforma() {
  return (
    <section id="plataforma" className="platform">
      <div className="container two-col">
        <div>
          <span className="eyebrow">Plataforma digital</span>
          <h2 className="section-title-offset">Una comunidad conectada con tecnología propia</h2>
          <p className="section-lead section-copy-offset">
            La plataforma digital es un servicio de CEMECOR para acompañar el funcionamiento de la
            Fundación y mejorar la experiencia de sus miembras.
          </p>
          <p className="paragraph-offset">
            La tecnología no reemplaza el espíritu humano de la Fundación: lo acompaña. Permite que
            la información circule mejor, que cada miembra tenga un espacio visible y que la
            comunidad esté más conectada.
          </p>
          <div className="tag-cloud">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="hero-actions actions-offset">
            <a className="btn primary" href="#contacto">
              Solicitar acceso
            </a>
            <a className="btn outline" href="#faq">
              Conocer cómo funciona
            </a>
          </div>
        </div>
        <div className="phone-wrap">
          <div className="phone" aria-label="Mockup de plataforma CEMECOR">
            <div className="phone-top">
              <img src={ASSETS.logo} alt="Logo CEMECOR" />
              <strong>CEMECOR</strong>
            </div>
            <div className="phone-body">
              {appRows.map((row) => (
                <div className="app-row" key={row.label}>
                  <span>{row.icon}</span>
                  {row.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
