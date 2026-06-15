import { ASSETS } from "../constants.js";

const concepts = [
  { icon: "♁", label: "Emprendedoras y Empresarias" },
  { icon: "✎", label: "Formación continua" },
  { icon: "♡", label: "Vínculos que acompañan" },
  { icon: "✦", label: "Comunidad en movimiento" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CEME-COR · Córdoba</span>
            <h1>
              Una comunidad de mujeres que <span>crecen juntas</span>
            </h1>
            <p className="lead">
              Desde Córdoba, CEMECOR acompaña a mujeres Emprendedoras, Empresarias, profesionales y
              creadoras de proyectos, generando espacios de formación, participación, visibilidad y
              crecimiento colectivo.
            </p>
            <div className="signature">Enseñar, crecer y comunicar</div>
            <div className="hero-actions">
              <a className="btn primary" href="#contacto">
                Quiero sumarme
              </a>
              <a className="btn outline" href="#fundacion">
                Conocer la Fundación
              </a>
            </div>
          </div>
          <div className="hero-card" aria-label="Imagen de comunidad CEMECOR">
            <div className="hero-image">
              {ASSETS.heroSlides.map((image, index) => (
                <div
                  className="hero-slide"
                  key={image.src}
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundPosition: image.position,
                    animationDelay: `${index * 4}s`,
                    "--slide-position": image.position,
                  }}
                >
                  <img className="hero-slide-photo" src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
            <span className="float-card one">✦ Formación</span>
            <span className="float-card two">♡ Comunidad</span>
            <span className="float-card three">◈ Participación</span>
            <span className="float-card four">✧ Visibilidad</span>
          </div>
        </div>
        <div className="concept-strip" aria-label="Conceptos institucionales">
          {concepts.map((concept) => (
            <div className="concept" key={concept.label}>
              <span className="icon-dot">{concept.icon}</span>
              {concept.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
