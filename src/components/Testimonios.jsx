import { TESTIMONIALS } from "../constants.js";

export default function Testimonios() {
  return (
    <section className="soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Voces de la comunidad</span>
          <h2>Historias que acompañan</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <article className="testimonial" key={testimonial.author}>
              <p>“{testimonial.quote}”</p>
              <div className="avatar">
                <span className="avatar-dot">{testimonial.initials}</span>
                <strong>{testimonial.author}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
