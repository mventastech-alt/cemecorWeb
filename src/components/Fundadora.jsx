import { ASSETS } from "../constants.js";
import BrandSwoosh from "./BrandSwoosh.jsx";

const MILESTONES = [
  {
    tag: "Tercera generación",
    text: "Cervecería Cassaro, la empresa familiar que fundó su abuelo en 1984 en Córdoba.",
  },
  {
    tag: "+20 años",
    text: "Al frente del área comercial y de ventas nacionales e internacionales de la empresa.",
  },
  {
    tag: "Desde 2013",
    text: "Organizadora de eventos sociales y empresariales con sello propio. Creó «Tarde de Mujeres».",
  },
  {
    tag: "Agosto 2026",
    text: "Doble distinción en el Concejo Deliberante de Córdoba: por su trayectoria empresaria y en homenaje a Adolfo Cassaro.",
  },
  {
    tag: "Septiembre 2026",
    text: "Lanzamiento oficial de CEMECOR, la Fundación que hoy preside.",
  },
];

export default function Fundadora() {
  return (
    <section className="section founder" id="fundadora">
      <div className="container founder-grid">
        <div className="founder-portrait" data-reveal>
          <div className="portrait-arch">
            <img src={ASSETS.founder} alt="Eliana Cassaro, fundadora de CEMECOR" loading="lazy" />
          </div>
          <BrandSwoosh className="founder-swoosh" />
          <div className="portrait-badge">
            <strong>Eliana Cassaro</strong>
            Fundadora y presidenta
          </div>
        </div>

        <div className="founder-copy" data-reveal>
          <span className="eyebrow eyebrow-light">La fundadora</span>
          <h2 className="display display-light">
            Una empresaria que eligió <em>abrir camino</em> para otras
          </h2>
          <p className="lead">
            Eliana Cassaro es diseñadora gráfica, organizadora de eventos y empresaria cordobesa.
            Creció dentro de Cervecería Cassaro, donde hace más de veinte años lidera el área
            comercial, y en paralelo construyó su propio camino como emprendedora.
          </p>
          <p>
            Su primer gran evento, «Tarde de Mujeres», nació de una necesidad personal: conocer y
            conectar con otras mujeres que estaban empezando a emprender. Formó parte de la comisión
            directiva de la Cámara de Cerveceros de Córdoba como única mujer del grupo, y sabe por
            experiencia lo que significa liderar en espacios donde todavía somos pocas.
          </p>
          <p>
            Esa misma búsqueda es la que hoy le da vida a CEMECOR: una red donde las mujeres que
            emprenden y lideran se encuentran, aprenden y crecen juntas.
          </p>

          <blockquote className="founder-quote">
            “Nunca me limité, nunca tuve miedo.”
            <cite>Eliana Cassaro</cite>
          </blockquote>

          <ol className="milestones">
            {MILESTONES.map((item) => (
              <li key={item.tag}>
                <span>{item.tag}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
