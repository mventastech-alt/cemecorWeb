import { APP_PATHS, appLink } from "../constants.js";

const STEPS = [
  {
    title: "Completá tu solicitud",
    text: "Registrate en la plataforma y contanos sobre vos y tu proyecto.",
  },
  {
    title: "Empezá a participar",
    text: "Sumate a los encuentros, las capacitaciones y la red de miembras.",
  },
];

export default function ComoEmpezar() {
  return (
    <section className="section start" id="empezar">
      <div className="container start-grid">
        <div data-reveal>
          <span className="eyebrow">Cómo sumarte</span>
          <h2 className="display">
            Así de simple es ser <em>parte de la Fundación</em>
          </h2>
          <ol className="start-steps">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="start-num">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary btn-lg" href={appLink(APP_PATHS.signup, "pasos-sumate")}>
            Quiero ser miembra
          </a>
        </div>

        <figure className="start-photo" data-reveal>
          <img src="/assets/hero-cemecor-institucional.png" alt="Mujeres de CEMECOR con la bandera de la Fundación" loading="lazy" />
          <figcaption>
            Una red de mujeres que se acompañan, aprenden y crecen juntas en Córdoba.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
