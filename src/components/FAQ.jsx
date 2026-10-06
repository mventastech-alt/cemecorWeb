const QUESTIONS = [
  {
    q: "¿Qué es CEMECOR?",
    a: "Es la Fundación de Mujeres Empresarias y Emprendedoras de Córdoba. Reunimos a mujeres que emprenden, dirigen empresas, ejercen una profesión o sostienen proyectos propios, bajo un lema: enseñar, crecer y comunicar.",
  },
  {
    q: "¿Quiénes pueden sumarse?",
    a: "Todas las mujeres que emprenden, lideran una empresa, ejercen una profesión o tienen un proyecto propio y quieren crecer acompañadas.",
  },
  {
    q: "¿Qué es la cuota social?",
    a: "Es el aporte mensual de cada miembra para pertenecer a la Fundación. A través de ella se sostiene parte de CEMECOR: encuentros y capacitaciones, la plataforma digital y acciones comunitarias.",
  },
  {
    q: "¿Qué actividades realiza la Fundación?",
    a: "Encuentros y networking, capacitaciones y charlas, reconocimientos a mujeres referentes y acciones comunitarias junto a instituciones y empresas aliadas.",
  },
  {
    q: "¿Qué es la plataforma digital?",
    a: "Es la herramienta de la Fundación para que la comunidad esté conectada: directorio de miembras, agenda, charlas, capacitaciones y beneficios. Funciona desde el navegador y podés agregarla a la pantalla de inicio del celular (en iPhone desde Safari con «Compartir → Agregar a inicio»; en Android desde Chrome con «Instalar app»).",
  },
  {
    q: "¿Qué puedo ver como invitada?",
    a: "El modo invitada te permite recorrer la plataforma y ver cómo es por dentro. Es solo una vista previa: para participar de la red y usar las herramientas necesitás ser miembra.",
  },
  {
    q: "¿Puedo darme de baja?",
    a: "Sí. Podés cancelar tu cuota social desde la plataforma cuando quieras.",
  },
];

export default function FAQ() {
  return (
    <section className="section section-cream" id="preguntas">
      <div className="container faq-grid">
        <div data-reveal>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="display">
            Todo lo que <em>querés saber</em>
          </h2>
          <p className="lead">¿Te quedó alguna duda? Escribinos y te respondemos.</p>
        </div>
        <div className="faq-list" data-reveal>
          {QUESTIONS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
