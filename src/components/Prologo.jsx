export default function Prologo() {
  return (
    <section id="fundacion" className="prologo">
      <div className="container two-col">
        <div className="prologo-text">
          <span className="eyebrow">Prólogo institucional</span>
          <h2>CEMECOR, la casa de las mujeres que emprenden, lideran y transforman</h2>
          <p>
            CEMECOR nace con una convicción profunda: cuando una mujer Emprendedora o Empresaria
            encuentra acompañamiento, formación y una red que la impulsa, su proyecto, su empresa y
            su liderazgo crecen con más fuerza.
          </p>
          <p>
            Desde Córdoba, la Fundación reúne trayectorias diversas para crear comunidad, compartir
            experiencias, potenciar capacidades y generar nuevas oportunidades.
          </p>
        </div>
        <aside className="statement-card">
          <div className="mark">“</div>
          <p className="quote">
            Cuando una mujer crece, crecen sus proyectos, sus empresas y las oportunidades para
            toda la sociedad.
          </p>
        </aside>
      </div>
      <div className="container profile-grid">
        <article className="profile-card">
          <span className="profile-kicker">Emprendedoras</span>
          <h3>La fuerza creadora</h3>
          <p>
            Transforman ideas en proyectos, abren caminos nuevos y sostienen la energía inicial que
            impulsa cada propuesta.
          </p>
          <ul>
            <li>Creación desde cero y desarrollo de nuevas iniciativas.</li>
            <li>Innovación, aprendizaje y compromiso con su comunidad.</li>
          </ul>
        </article>
        <article className="profile-card featured">
          <span className="profile-kicker">Empresarias</span>
          <h3>La visión estratégica</h3>
          <p>
            Consolidación, liderazgo y capacidad de organización para fortalecer empresas, equipos y
            procesos sostenidos.
          </p>
          <ul>
            <li>Gestión, planificación y construcción de sistemas de trabajo.</li>
            <li>Liderazgo, dirección estratégica y crecimiento sostenido.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
