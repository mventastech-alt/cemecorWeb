import PhoneFrame from "./PhoneFrame.jsx";
import { Users, Mic, Cap, Diamond, Sparkles, Calendar } from "./icons.jsx";
import { APP_PATHS, appLink } from "../constants.js";

const FEATURES = [
  { icon: Users, title: "Directorio de miembras", text: "Encontrá a otras miembras por rubro." },
  { icon: Calendar, title: "Agenda de la Fundación", text: "Todos los encuentros en un lugar." },
  { icon: Mic, title: "Charlas", text: "En vivo y grabadas." },
  { icon: Cap, title: "Capacitaciones", text: "Cursos para hacer crecer tu proyecto." },
  { icon: Diamond, title: "Diamantes", text: "Tu participación tiene beneficios." },
  { icon: Sparkles, title: "Mentora con IA", text: "Orientación para tu negocio." },
];

export default function Plataforma() {
  return (
    <section className="section platform" id="plataforma">
      <div className="container platform-grid">
        <div className="platform-copy" data-reveal>
          <span className="eyebrow eyebrow-light">La plataforma de la Fundación</span>
          <h2 className="display display-light">
            La comunidad, <em>conectada</em> todos los días
          </h2>
          <p className="lead lead-light">
            La tecnología no reemplaza el encuentro: lo acompaña. Cada miembra accede a la plataforma
            digital de CEMECOR, donde la información circula mejor y la red está siempre a mano.
          </p>
          <ul className="platform-features">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="platform-icon">
                  <Icon />
                </span>
                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <a className="btn btn-glass" href={appLink(APP_PATHS.guest, "plataforma-invitada")}>
            Ver la plataforma como invitada
          </a>
        </div>

        <div className="platform-visual" aria-hidden="true" data-reveal>
          <PhoneFrame src="/assets/app/directorio.jpg" alt="" className="platform-phone platform-phone-back" />
          <PhoneFrame src="/assets/app/inicio.jpg" alt="" className="platform-phone platform-phone-front" />
        </div>
      </div>
    </section>
  );
}
