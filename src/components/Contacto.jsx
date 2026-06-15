import { ASSETS } from "../constants.js";

const alliances = [
  {
    icon: "▦",
    title: "Instituciones",
    text: "Para generar propuestas de formación, participación y acompañamiento.",
  },
  {
    icon: "✎",
    title: "Profesionales",
    text: "Para brindar charlas, talleres o espacios de aprendizaje.",
  },
  {
    icon: "♡",
    title: "Organizaciones",
    text: "Para impulsar acciones conjuntas con impacto comunitario.",
  },
];

const contactSteps = [
  {
    number: "1",
    title: "Completá tu solicitud",
    text: "Dejanos tus datos para conocer tu perfil y tu proyecto.",
  },
  {
    number: "2",
    title: "Conocé la comunidad",
    text: "Te acercamos información sobre la Fundación, sus actividades y su funcionamiento.",
  },
  {
    number: "3",
    title: "Ingresá a la plataforma",
    text: "Accedé a las herramientas digitales exclusivas para miembras.",
  },
];

function AlianzasInstitucionales() {
  return (
    <section>
      <div className="container two-col">
        <div>
          <span className="eyebrow">Alianzas institucionales</span>
          <h2 className="section-title-offset">Alianzas que fortalecen el propósito</h2>
          <p className="section-lead section-copy-offset">
            CEMECOR abre sus puertas a instituciones, organizaciones, profesionales y espacios que
            compartan el compromiso de acompañar a mujeres Emprendedoras y Empresarias, promoviendo
            su desarrollo y participación.
          </p>
          <div className="media-main media-offset">
            <img src={ASSETS.actividad} alt="Actividad institucional CEMECOR" />
          </div>
        </div>
        <div className="cards-grid single-column-grid">
          {alliances.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contacto() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Formulario visual listo para conectar en Cursor.");
  };

  return (
    <>
      <AlianzasInstitucionales />
      <section id="contacto" className="soft">
        <div className="container contact-wrap">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title-offset">Cómo sumarte a CEMECOR</h2>
            <p className="section-lead section-copy-offset">
              Dejanos tus datos para conocer tu perfil, acercarte información sobre la Fundación y
              acompañarte en el proceso de incorporación.
            </p>
            <div className="feature-steps contact-steps">
              {contactSteps.map((step) => (
                <article className="step" key={step.number}>
                  <div className="step-num">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" placeholder="Tu teléfono" />
            </div>
            <div className="field">
              <label htmlFor="motivo">Motivo de consulta</label>
              <select id="motivo">
                <option>Quiero sumarme</option>
                <option>Quiero conocer la Fundación</option>
                <option>Quiero proponer una alianza</option>
                <option>Necesito ayuda con la plataforma</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" placeholder="Contanos brevemente en qué podemos acompañarte" />
            </div>
            <button className="btn primary" type="submit">
              Enviar consulta
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
