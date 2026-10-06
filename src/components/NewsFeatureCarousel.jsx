import { useEffect, useState } from "react";
import { APP_PATHS, appLink } from "../constants.js";

const AUTO_MS = 5500;

const SLIDES = [
  {
    id: "reconocimiento-concejo",
    src: "/assets/reconocimiento-concejo.jpg",
    alt: "Reconocimiento a mujeres empresarias y emprendedoras en Córdoba — Concejo Deliberante",
    kicker: "Eventos · Noticias",
    title: "Reconocimiento a mujeres empresarias y emprendedoras en Córdoba",
    date: "24 de agosto de 2026",
    href: "https://cdcordoba.gob.ar/reconocimiento-a-mujeres-empresarias-y-emprendedoras-en-cordoba/",
    cue: "Ver nota",
    objectPosition: "center 42%",
  },
  {
    id: "encuentro",
    src: "/assets/hero-cemecor-encuentro.png",
    alt: "Mujeres participando de un encuentro institucional CEMECOR",
    kicker: "Comunidad",
    title: "Encuentros que fortalecen la red de mujeres Emprendedoras y Empresarias",
    date: "Córdoba · CEMECOR",
    href: "https://instagram.com/cemecor.ok",
    cue: "Ver más",
    objectPosition: "center 52%",
  },
  {
    id: "capacitacion",
    src: "/assets/hero-cemecor-capacitacion-sala.jpg",
    alt: "Encuentro de formación CEMECOR con audiencia en sala",
    kicker: "Formación",
    title: "Espacios de capacitación para potenciar proyectos y empresas",
    date: "Formación continua",
    href: "https://instagram.com/cemecor.ok",
    cue: "Ver más",
    objectPosition: "center 42%",
  },
  {
    id: "comunidad",
    src: "/assets/hero-cemecor-grupo.png",
    alt: "Grupo de mujeres de la comunidad CEMECOR",
    kicker: "Fundación",
    title: "Una comunidad de mujeres que crecen juntas en Córdoba",
    date: "CEMECOR",
    href: appLink(APP_PATHS.guest, "carrusel-comunidad"),
    cue: "Conocé la app",
    objectPosition: "center 50%",
  },
];

export default function NewsFeatureCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = SLIDES[index];

  useEffect(() => {
    if (paused || SLIDES.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  return (
    <div
      className="news-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="news-carousel-viewport" aria-roledescription="carousel" aria-label="Eventos y noticias CEMECOR">
        {SLIDES.map((slide, slideIndex) => {
          const isActive = slideIndex === index;
          return (
            <a
              key={slide.id}
              className={`news-feature${isActive ? " is-active" : ""}`}
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              aria-label={`${slide.cue}: ${slide.title}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={1600}
                height={900}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{ objectPosition: slide.objectPosition }}
              />
              <div className="news-feature-copy">
                <span className="news-feature-kicker">{slide.kicker}</span>
                <strong>{slide.title}</strong>
                <span className="news-feature-date">{slide.date}</span>
              </div>
              <span className="news-feature-cue" aria-hidden="true">
                {slide.cue}
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          );
        })}
      </div>

      <div className="news-carousel-controls" role="group" aria-label="Controles del carrusel">
        <button
          type="button"
          className="news-carousel-nav"
          aria-label="Anterior"
          onClick={() => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        >
          ‹
        </button>
        <div className="news-carousel-dots">
          {SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              className={`news-carousel-dot${slideIndex === index ? " is-active" : ""}`}
              aria-label={`Ir a la diapositiva ${slideIndex + 1}: ${slide.title}`}
              aria-current={slideIndex === index ? "true" : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          className="news-carousel-nav"
          aria-label="Siguiente"
          onClick={() => setIndex((prev) => (prev + 1) % SLIDES.length)}
        >
          ›
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {active.title}
      </p>
    </div>
  );
}
