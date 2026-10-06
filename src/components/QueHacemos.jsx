import NewsFeatureCarousel from "./NewsFeatureCarousel.jsx";

const ACTIONS = [
  {
    title: "Encuentros y networking",
    text: "Espacios para conocernos, presentar nuestros proyectos y generar alianzas entre mujeres que emprenden y lideran.",
    image: "/assets/hero-cemecor-encuentro.png",
    position: "center 52%",
  },
  {
    title: "Capacitaciones y charlas",
    text: "Formación con profesionales en marketing, finanzas, marco legal, liderazgo y todo lo que un proyecto necesita para crecer.",
    image: "/assets/hero-cemecor-capacitacion-sala.jpg",
    position: "center 42%",
  },
  {
    title: "Reconocimientos",
    text: "Visibilizamos a las mujeres que son referentes, como el homenaje en el Concejo Deliberante de Córdoba por el Día del Empresario Nacional.",
    image: "/assets/reconocimiento-concejo.jpg",
    position: "center 42%",
  },
  {
    title: "Acciones comunitarias y alianzas",
    text: "Trabajamos junto a instituciones, organizaciones y empresas en iniciativas con impacto para las mujeres de Córdoba.",
    image: "/assets/hero-cemecor-bandera.png",
    position: "center 48%",
  },
];

export default function QueHacemos() {
  return (
    <section className="section" id="que-hacemos">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="display">
            Una Fundación que <em>se vive</em> en cada encuentro
          </h2>
        </header>

        <div className="actions-grid">
          {ACTIONS.map((action) => (
            <article className="action-card" key={action.title} data-reveal>
              <div className="action-media">
                <img
                  src={action.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: action.position }}
                />
              </div>
              <div className="action-copy">
                <h3>{action.title}</h3>
                <p>{action.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="news-block" data-reveal>
          <div className="news-block-head">
            <span className="eyebrow">Novedades</span>
            <h2 className="display display-sm">La Fundación en movimiento</h2>
          </div>
          <NewsFeatureCarousel />
        </div>
      </div>
    </section>
  );
}
