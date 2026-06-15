const values = [
  {
    icon: "♡",
    title: "Unidad",
    text: "Trabajamos juntas, compartiendo experiencias, aprendizajes y desafíos.",
  },
  {
    icon: "✦",
    title: "Innovación",
    text: "Incorporamos herramientas digitales para mantener conectada a la comunidad.",
  },
  {
    icon: "✓",
    title: "Integridad",
    text: "Promovemos vínculos basados en el respeto, la transparencia y el compromiso.",
  },
  {
    icon: "♕",
    title: "Liderazgo femenino",
    text: "Visibilizamos el rol de la mujer en el desarrollo social, profesional, emprendedor y empresarial.",
  },
  {
    icon: "◈",
    title: "Participación",
    text: "Impulsamos una comunidad activa, donde cada voz tiene un lugar.",
  },
  {
    icon: "✎",
    title: "Formación",
    text: "Creemos en el aprendizaje como camino para abrir nuevas posibilidades.",
  },
];

const activities = [
  {
    icon: "✎",
    title: "Capacitaciones",
    text: "Espacios de aprendizaje para fortalecer habilidades, conocimientos y confianza.",
  },
  {
    icon: "☰",
    title: "Charlas",
    text: "Encuentros de reflexión, inspiración e intercambio de experiencias.",
  },
  {
    icon: "▣",
    title: "Agenda de actividades",
    text: "Una agenda activa para participar, compartir y mantenerse conectadas.",
  },
  {
    icon: "◎",
    title: "Directorio de miembras",
    text: "Un espacio para conocer a las integrantes de la comunidad y sus proyectos.",
  },
  {
    icon: "✦",
    title: "Difusión institucional",
    text: "Canales para visibilizar actividades, iniciativas e historias de mujeres.",
  },
  {
    icon: "♡",
    title: "Acompañamiento",
    text: "Una red cercana para transitar el camino emprendedor y empresarial con más contención.",
  },
];

function Card({ icon, title, text }) {
  return (
    <article className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function QueHacemos() {
  return (
    <>
      <section className="soft foundation-continuation">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Qué es CEMECOR</span>
            <h2>Más que una Fundación: una comunidad que acompaña</h2>
            <p className="section-lead">
              CEMECOR agrupa, representa y potencia a mujeres Emprendedoras, Empresarias,
              profesionales y creadoras de proyectos. Su misión es generar espacios de formación,
              participación, comunicación y acompañamiento.
            </p>
          </div>
          <div className="cards-grid">
            {values.map((item) => (
              <Card {...item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-do">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Qué hacemos</span>
            <h2>Acompañamos proyectos, historias y caminos</h2>
            <p className="section-lead">
              CEMECOR está pensado para mujeres Emprendedoras y Empresarias que desean
              desarrollarse, aprender, compartir y formar parte de una red que acompaña.
            </p>
          </div>
          <div className="cards-grid">
            {activities.map((item) => (
              <Card {...item} key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
