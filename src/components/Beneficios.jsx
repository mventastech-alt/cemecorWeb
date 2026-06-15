const benefits = [
  "Participar en actividades institucionales.",
  "Acceder a espacios de formación.",
  "Formar parte del directorio de miembras.",
  "Compartir iniciativas y proyectos.",
  "Recibir novedades de la comunidad.",
  "Utilizar la plataforma digital.",
  "Fortalecer vínculos con otras mujeres.",
];

export default function Beneficios() {
  return (
    <section>
      <div className="container two-col">
        <div>
          <span className="eyebrow">Ser parte</span>
          <h2 className="section-title-offset">Emprender y liderar acompañada transforma el camino</h2>
          <p className="section-lead section-copy-offset">
            Ser miembra de CEMECOR significa integrarte a una comunidad de mujeres que comparten
            experiencias, conocimientos, desafíos y ganas de crecer.
          </p>
        </div>
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span className="check">✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
