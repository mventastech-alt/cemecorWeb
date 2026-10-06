import { TESTIMONIALS } from "../constants.js";
import { Star } from "./icons.jsx";

export default function Testimonios() {
  return (
    <section className="section testimonials" aria-labelledby="testimonios-title">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Voces de la comunidad</span>
          <h2 className="display" id="testimonios-title">
            Lo que dicen <em>nuestras miembras</em>
          </h2>
        </header>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((item) => (
            <figure className="testimonial" key={item.name} data-reveal>
              <div className="stars" aria-label="5 estrellas">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} />
                ))}
              </div>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span className="avatar">{item.name.charAt(0)}</span>
                <span>
                  <strong>{item.name}</strong>
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
