import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Prologo from "./components/Prologo.jsx";
import Historia from "./components/Historia.jsx";
import QueHacemos from "./components/QueHacemos.jsx";
import Esencia from "./components/Esencia.jsx";
import Plataforma from "./components/Plataforma.jsx";
import Beneficios from "./components/Beneficios.jsx";
import Capacitaciones from "./components/Capacitaciones.jsx";
import Impacto from "./components/Impacto.jsx";
import Testimonios from "./components/Testimonios.jsx";
import Contacto from "./components/Contacto.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Prologo />
        <Historia />
        <QueHacemos />
        <Esencia />
        <Plataforma />
        <Beneficios />
        <Capacitaciones />
        <Impacto />
        <Testimonios />
        <Contacto />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
