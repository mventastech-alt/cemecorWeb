import { CONTACT_LINKS } from "../constants.js";
import { Instagram, Mail, WhatsApp } from "./icons.jsx";

const CHANNELS = [
  { href: CONTACT_LINKS.emailUrl, label: "Email", detail: CONTACT_LINKS.email, icon: Mail },
  { href: CONTACT_LINKS.whatsappUrl, label: "WhatsApp", detail: "Respuesta rápida", icon: WhatsApp },
  { href: CONTACT_LINKS.instagramUrl, label: "Instagram", detail: "@cemecor.ok", icon: Instagram },
];

export default function Contacto() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Contacto</span>
          <h2 className="display">Hablemos</h2>
          <p className="lead">
            ¿Querés sumarte, proponer una alianza o conocer más sobre la Fundación? Escribinos y te
            respondemos a la brevedad.
          </p>
        </header>
        <ul className="channels" data-reveal>
          {CHANNELS.map(({ href, label, detail, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <span className="channel-icon">
                  <Icon />
                </span>
                <span>
                  <strong>{label}</strong>
                  {detail}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
