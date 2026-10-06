import { Cap, Users, Chat } from "./icons.jsx";

const PILLARS = [
  {
    icon: Cap,
    tone: "magenta",
    title: "Enseñar",
    text: "Capacitaciones, charlas y talleres con profesionales para que cada proyecto tenga herramientas concretas.",
  },
  {
    icon: Users,
    tone: "orange",
    title: "Crecer",
    text: "Una red de mujeres que se recomiendan, hacen alianzas y generan oportunidades de negocio entre sí.",
  },
  {
    icon: Chat,
    tone: "teal",
    title: "Comunicar",
    text: "Visibilidad para los emprendimientos y empresas, y reconocimiento a las mujeres que son referentes.",
  },
];

export default function Fundacion() {
  return (
    <section className="section section-cream" id="fundacion">
      <div className="container">
        <div className="split">
          <div data-reveal>
            <span className="eyebrow">Qué es CEMECOR</span>
            <h2 className="display">
              Una fundación hecha <em>por y para</em> mujeres que emprenden y lideran
            </h2>
          </div>
          <div className="prose" data-reveal>
            <p className="lead">
              Una fundación es una organización sin fines de lucro que existe para cumplir un
              propósito. El nuestro es claro: que ninguna mujer que emprende o dirige una empresa en
              Córdoba tenga que hacerlo sola.
            </p>
            <p>
              CEMECOR reúne a mujeres que emprenden, dirigen empresas, ejercen una profesión o
              sostienen proyectos propios. Nos mueve una idea simple: el crecimiento se acelera cuando
              hay acompañamiento, formación y una red real que sostiene.
            </p>
            <p>
              Por eso generamos encuentros, capacitaciones, reconocimientos y acciones comunitarias,
              y tejemos alianzas con instituciones y empresas que comparten nuestro compromiso con el
              desarrollo de las mujeres de Córdoba.
            </p>
          </div>
        </div>

        <div className="pillars">
          {PILLARS.map(({ icon: Icon, tone, title, text }) => (
            <article className={`pillar tone-${tone}`} key={title} data-reveal>
              <span className="pillar-icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="profiles">
          <article className="profile" data-reveal>
            <span className="profile-kicker">Emprendedoras</span>
            <h3>La fuerza creadora</h3>
            <p>
              Transforman ideas en proyectos, abren caminos nuevos y sostienen la energía inicial que
              impulsa cada propuesta.
            </p>
          </article>
          <article className="profile profile-dark" data-reveal>
            <span className="profile-kicker">Empresarias</span>
            <h3>La visión estratégica</h3>
            <p>
              Consolidan, lideran y organizan para fortalecer empresas, equipos y procesos que
              crecen de forma sostenida.
            </p>
          </article>
        </div>

        <blockquote className="foundation-quote" data-reveal>
          “Cuando una mujer crece, crecen sus proyectos, sus empresas y las oportunidades para toda
          la sociedad.”
        </blockquote>
      </div>
    </section>
  );
}
