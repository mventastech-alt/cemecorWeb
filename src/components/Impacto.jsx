import { METRICS } from "../constants.js";

export default function Impacto() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Impacto</span>
          <h2>Una comunidad en movimiento</h2>
          <p className="section-lead">
            Cada encuentro, cada capacitación y cada historia compartida fortalece el camino de
            CEMECOR.
          </p>
        </div>
        <div className="stats">
          {METRICS.map((metric) => (
            <div className="stat" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <span className="editable-note">Datos editables según información institucional actualizada.</span>
      </div>
    </section>
  );
}
