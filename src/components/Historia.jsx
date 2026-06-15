const timeline = [
  {
    number: "1",
    title: "El encuentro",
    text: "Mujeres con historias distintas comienzan a reunirse alrededor de un propósito común.",
  },
  {
    number: "2",
    title: "La comunidad",
    text: "Se fortalece una red de acompañamiento, formación y participación.",
  },
  {
    number: "3",
    title: "La organización",
    text: "La Fundación consolida espacios, actividades y canales de comunicación.",
  },
  {
    number: "4",
    title: "La evolución digital",
    text: "CEMECOR incorpora herramientas tecnológicas para acompañar mejor a sus miembras.",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="history">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Nuestra historia</span>
          <h2>Un camino construido desde Córdoba</h2>
          <p className="section-lead">
            La historia de CEMECOR comienza en el encuentro de mujeres que compartían una misma
            necesidad: contar con un espacio propio donde poder crecer, aprender, vincularse y
            sentirse acompañadas en el camino emprendedor y empresarial.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="time-card" key={item.number}>
              <div className="num">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
