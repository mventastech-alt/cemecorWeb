const questions = [
  {
    question: "¿Qué es CEMECOR?",
    answer:
      "CEMECOR es una Fundación de la ciudad de Córdoba que acompaña a mujeres Emprendedoras, Empresarias, profesionales y creadoras de proyectos mediante formación, participación, visibilidad y comunidad.",
    open: true,
  },
  {
    question: "¿Quiénes pueden sumarse?",
    answer:
      "Pueden sumarse mujeres Emprendedoras, Empresarias, profesionales, trabajadoras independientes, creadoras de proyectos e integrantes que quieran participar activamente en una comunidad de crecimiento colectivo.",
  },
  {
    question: "¿Qué actividades realiza la Fundación?",
    answer:
      "La Fundación impulsa capacitaciones, charlas, encuentros, agenda de actividades, espacios de difusión institucional y propuestas de participación entre miembras.",
  },
  {
    question: "¿Qué son los Diamantes CEMECOR?",
    answer:
      "Los Diamantes son una forma simbólica de reconocer la participación, el compromiso y la presencia activa de las miembras dentro de la Fundación.",
  },
  {
    question: "¿La plataforma digital es la Fundación?",
    answer:
      "No. La plataforma digital es una herramienta de apoyo. La esencia de CEMECOR está en su comunidad, sus encuentros, su historia y su propósito.",
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container two-col">
        <div>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title-offset">Información útil</h2>
          <p className="section-lead section-copy-offset">
            Respuestas simples para conocer mejor el propósito, la comunidad y la plataforma de
            CEMECOR.
          </p>
        </div>
        <div className="faq">
          {questions.map((item) => (
            <details open={item.open} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
