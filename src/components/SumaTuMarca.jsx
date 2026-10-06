import { CONTACT_LINKS } from "../constants.js";
import { useSponsors } from "../useSponsors.js";
import BrandSwoosh from "./BrandSwoosh.jsx";
import SponsorLogo from "./SponsorLogo.jsx";
import { Briefcase, Building, Heart, WhatsApp } from "./icons.jsx";

const AUDIENCES = [
  {
    icon: Building,
    title: "Empresas e instituciones",
    text: "Tu logo en este sitio y dentro de la app, a la vista de cada miembra.",
  },
  {
    icon: Briefcase,
    title: "Profesionales",
    text: "Charlas, talleres y espacios de aprendizaje para la comunidad.",
  },
  {
    icon: Heart,
    title: "Organizaciones",
    text: "Acciones conjuntas con impacto para las mujeres de Córdoba.",
  },
];

const SPONSOR_MESSAGE = "Hola CEMECOR, quiero sumar mi marca como sponsor de la Fundación.";

export default function SumaTuMarca() {
  const sponsors = useSponsors();

  return (
    <section className="section" id="sponsors">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Sponsors y alianzas</span>
          <h2 className="display">
            Marcas que <em>creen en las mujeres</em> que emprenden
          </h2>
        </header>

        <ul className="sponsor-wall" data-reveal>
          {sponsors.map((sponsor) => (
            <SponsorLogo key={sponsor.logo} sponsor={sponsor} linked />
          ))}
        </ul>

        <div className="brand-cta" data-reveal>
          <BrandSwoosh className="brand-cta-swoosh" />
          <div className="brand-cta-copy">
            <h3>Sumá tu marca a la Fundación</h3>
            <p>
              Acompañá a una comunidad de mujeres empresarias y emprendedoras de Córdoba y llegá a
              ellas todos los días, en la web y en la app.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href={`${CONTACT_LINKS.whatsappUrl}?text=${encodeURIComponent(SPONSOR_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
              Quiero ser sponsor
            </a>
          </div>
          <div className="brand-cta-cards">
            {AUDIENCES.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
