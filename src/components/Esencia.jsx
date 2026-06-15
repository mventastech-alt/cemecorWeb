const pillars = [
  {
    title: "Enseñar",
    text: "Porque la formación abre caminos, fortalece la confianza y permite construir nuevas posibilidades.",
  },
  {
    title: "Crecer",
    text: "Porque cada paso individual también impulsa a la comunidad.",
  },
  {
    title: "Comunicar",
    text: "Porque mostrar lo que hacemos es una forma de ocupar espacios, inspirar y generar nuevas oportunidades.",
  },
];

export default function Esencia() {
  return (
    <section className="dark-section">
      <div className="container">
        <span className="eyebrow dark">Nuestra esencia</span>
        <h2 className="section-title-offset">Enseñar, crecer y comunicar</h2>
        <p className="section-lead section-copy-offset">
          En CEMECOR creemos que cada mujer tiene una historia, un talento y una capacidad única
          para transformar su entorno. Por eso trabajamos para crear espacios donde las
          Emprendedoras y Empresarias puedan capacitarse, vincularse y compartir experiencias.
        </p>
        <div className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <div className="big">{pillar.title}</div>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
