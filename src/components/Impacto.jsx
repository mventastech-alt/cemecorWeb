import { METRICS } from "../constants.js";
import { useEffect, useRef, useState } from "react";

function parseMetricValue(value) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  if (!match) {
    return { prefix: "", number: 0, suffix: value };
  }

  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
  };
}

export default function Impacto() {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState(() => METRICS.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;
    const metricParts = METRICS.map((metric) => parseMetricValue(metric.value));

    if (!statsElement) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(metricParts.map((metric) => metric.number));
      return undefined;
    }

    let animationFrame = 0;

    const animate = () => {
      const duration = 1400;
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(metricParts.map((metric) => Math.round(metric.number * eased)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="impacto">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Impacto</span>
          <h2>Una comunidad en movimiento</h2>
          <p className="section-lead">
            Cada encuentro, cada capacitación y cada historia compartida fortalece el camino de
            CEMECOR.
          </p>
        </div>
        <div className="stats" ref={statsRef}>
          {METRICS.map((metric, index) => {
            const metricParts = parseMetricValue(metric.value);

            return (
            <div className="stat" key={metric.label}>
              <strong>
                {metricParts.prefix}
                {counts[index]}
                {metricParts.suffix}
              </strong>
              <span>{metric.label}</span>
            </div>
            );
          })}
        </div>
        <span className="editable-note">Datos editables según información institucional actualizada.</span>
      </div>
    </section>
  );
}
