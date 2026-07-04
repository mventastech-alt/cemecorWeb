import { SPONSORS } from "../constants.js";

export default function AlianzasEstrategicas() {
  return (
    <section id="alianzas" className="alianzas-estrategicas">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Alianzas estratégicas</span>
          <h2>Organizaciones que acompañan nuestro camino</h2>
          <p className="section-lead">
            Empresas, instituciones y espacios que comparten el compromiso de impulsar el
            desarrollo de mujeres Emprendedoras y Empresarias en Córdoba.
          </p>
        </div>
        <ul className="sponsors-grid">
          {SPONSORS.map((sponsor) => (
            <li className="sponsor-item" key={sponsor.name}>
              <div className="sponsor-card">
                <img
                  className={`sponsor-logo${sponsor.wide ? " sponsor-logo--wide" : ""}`}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
