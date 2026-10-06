import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SponsorsStrip from "./components/SponsorsStrip.jsx";
import Fundacion from "./components/Fundacion.jsx";
import Fundadora from "./components/Fundadora.jsx";
import QueHacemos from "./components/QueHacemos.jsx";
import CuotaSocial from "./components/CuotaSocial.jsx";
import Plataforma from "./components/Plataforma.jsx";
import Testimonios from "./components/Testimonios.jsx";
import ComoEmpezar from "./components/ComoEmpezar.jsx";
import SumaTuMarca from "./components/SumaTuMarca.jsx";
import FAQ from "./components/FAQ.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SponsorsStrip />
        <Fundacion />
        <Fundadora />
        <QueHacemos />
        <Testimonios />
        <CuotaSocial />
        <ComoEmpezar />
        <Plataforma />
        <SumaTuMarca />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
