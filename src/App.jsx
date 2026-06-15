import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Prologo from "./components/Prologo.jsx";
import Plataforma from "./components/Plataforma.jsx";
import Impacto from "./components/Impacto.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      "main > section, .final-cta, .card, .profile-card, .stat, .statement-card, .phone, .form"
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    revealElements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Prologo />
        <Plataforma />
        <Impacto />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
