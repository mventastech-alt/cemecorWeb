import { APP_PATHS, appLink } from "../constants.js";
import { ArrowRight, Calendar, Check, Heart, Monitor } from "./icons.jsx";

const INCLUDED = [
  "Ser parte de la Fundación y de su red de mujeres",
  "Encuentros, charlas y capacitaciones",
  "Tu ficha en el directorio de miembras",
  "Acceso completo a la plataforma digital",
  "Diamantes y beneficios en comercios aliados",
];

const SUSTAINS = [
  {
    icon: Calendar,
    tone: "magenta",
    title: "Encuentros y capacitaciones",
    text: "Charlas, talleres y espacios de formación para seguir creciendo.",
  },
  {
    icon: Monitor,
    tone: "orange",
    title: "La plataforma digital",
    text: "La herramienta que conecta a la comunidad todos los días.",
  },
  {
    icon: Heart,
    tone: "teal",
    title: "Acciones comunitarias",
    text: "Iniciativas con impacto para las mujeres de Córdoba.",
  },
];

export default function CuotaSocial() {
  return (
    <section className="section section-cream" id="cuota">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Cuota social</span>
          <h2 className="display">
            Sumate como <em>miembra</em> de la Fundación
          </h2>
          <p className="lead">
            La cuota social es tu aporte para pertenecer a CEMECOR. A través de ella se sostiene
            parte de la Fundación, y como miembra participás de todas sus actividades.
          </p>
        </header>

        <div className="sustains" data-reveal>
          <h3 className="sustains-title">¿Qué sostiene tu cuota social?</h3>
          <div className="sustains-grid">
            {SUSTAINS.map(({ icon: Icon, tone, title, text }) => (
              <article className={`sustain tone-${tone}`} key={title}>
                <span className="sustain-icon">
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="plans">
          <article className="plan plan-main" data-reveal>
            <div className="plan-head">
              <span className="plan-tag">Miembra de la Fundación</span>
            </div>
            <ul className="plan-list">
              {INCLUDED.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn-primary btn-lg btn-block" href={appLink(APP_PATHS.signup, "cuota-miembra")}>
              Quiero ser miembra
              <ArrowRight />
            </a>
          </article>

          <article className="plan plan-guest" data-reveal>
            <span className="plan-tag plan-tag-soft">¿Querés conocernos primero?</span>
            <h3>Hablemos antes de que te sumes</h3>
            <p>
              Escribinos y te contamos cómo funciona la Fundación, sus actividades y cómo es ser
              miembra.
            </p>
            <a className="btn btn-outline btn-block" href="#contacto">
              Escribinos
            </a>
            <p className="plan-guest-alt">
              También podés{" "}
              <a href={appLink(APP_PATHS.guest, "cuota-invitada")}>ver la plataforma como invitada</a>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
