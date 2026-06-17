import { ASSETS, CONTACT_LINKS } from "../constants.js";

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
    <section className="alianzas">
      <div className="container">
        <div className="two-col">
          <div>
            <span className="eyebrow">Alianzas institucionales</span>
            <h2 className="section-title-offset">Alianzas que fortalecen el propósito</h2>
            <p className="section-lead section-copy-offset">
              CEMECOR abre sus puertas a instituciones, organizaciones, profesionales y espacios que
              compartan el compromiso de acompañar a mujeres Emprendedoras y Empresarias, promoviendo
              su desarrollo y participación.
            </p>
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
        <div className="partners-wall-wrap">
          <img
            className="partners-wall"
            src={ASSETS.partnersWall}
            alt="Empresas e instituciones que acompañan a CEMECOR"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default function Contacto() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hola CEMECOR, quiero hacer una consulta.",
      `Nombre: ${formData.get("nombre")}`,
      `Email: ${formData.get("email")}`,
      `Teléfono: ${formData.get("telefono") || "No indicado"}`,
      `Motivo: ${formData.get("motivo")}`,
      `Mensaje: ${formData.get("mensaje") || "No indicado"}`,
    ].join("\n");

    window.open(`${CONTACT_LINKS.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank");
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
              <input id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" placeholder="Tu teléfono" />
            </div>
            <div className="field">
              <label htmlFor="motivo">Motivo de consulta</label>
              <select id="motivo" name="motivo">
                <option>Quiero sumarme</option>
                <option>Quiero conocer la Fundación</option>
                <option>Quiero proponer una alianza</option>
                <option>Necesito ayuda con la plataforma</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Contanos brevemente en qué podemos acompañarte"
              />
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
