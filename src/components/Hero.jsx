import { useEffect, useState } from "react";
import { ASSETS, APP_PATHS, appLink } from "../constants.js";
import BrandSwoosh from "./BrandSwoosh.jsx";
import { ArrowRight } from "./icons.jsx";

const SLIDE_MS = 6000;

const PILLARS = [
  { title: "Enseñar", text: "Formación y capacitaciones" },
  { title: "Crecer", text: "Red y oportunidades" },
  { title: "Comunicar", text: "Visibilidad y reconocimiento" },
];

export default function Hero() {
  const slides = ASSETS.heroSlides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="inicio">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            className={index === active ? "is-active" : undefined}
            src={slide.src}
            alt=""
            style={{ objectPosition: slide.position }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />
      <BrandSwoosh className="hero-swoosh" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light">Fundación CEMECOR · Córdoba</span>
          <h1>
            Mujeres que emprenden, lideran y <em>crecen juntas.</em>
          </h1>
          <p className="hero-lead">
            Somos la Fundación de Mujeres Empresarias y Emprendedoras de Córdoba. Acompañamos a cada
            mujer con formación, comunidad y una red real que la sostiene.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#cuota">
              Sumate a la Fundación
              <ArrowRight />
            </a>
            <a className="btn btn-glass btn-lg" href="#fundacion">
              Conocé la Fundación
            </a>
          </div>
          <p className="hero-login">
            ¿Ya sos miembra?{" "}
            <a href={appLink(APP_PATHS.login, "hero-ingresar")}>Ingresá a la plataforma</a>
          </p>
        </div>

        <div className="hero-bottom">
          <ul className="hero-pillars" aria-label="Nuestro lema">
            {PILLARS.map((pillar) => (
              <li key={pillar.title}>
                <strong>{pillar.title}</strong>
                <span>{pillar.text}</span>
              </li>
            ))}
          </ul>
          <div className="hero-dots" role="group" aria-label="Fotos de la Fundación">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={index === active ? "is-active" : undefined}
                aria-label={`Ver foto ${index + 1}: ${slide.alt}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
