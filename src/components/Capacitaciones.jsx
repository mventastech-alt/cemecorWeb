import { ASSETS } from "../constants.js";

export default function Capacitaciones() {
  return (
    <section className="soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Capacitaciones y encuentros</span>
          <h2>Aprender, compartir y vincularse</h2>
          <p className="section-lead">
            Impulsamos encuentros, talleres, charlas y espacios de formación para acompañar el
            crecimiento de cada mujer y de cada proyecto.
          </p>
        </div>
        <div className="media-grid">
          <div className="media-main">
            <img src={ASSETS.encuentro} alt="Encuentro de capacitación y comunidad" />
          </div>
          <div className="media-side">
            <img src={ASSETS.capacitacion} alt="Charla institucional" />
            <img src={ASSETS.comunidad} alt="Actividad de comunidad" />
          </div>
        </div>
      </div>
    </section>
  );
}
