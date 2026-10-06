import { useSponsors } from "../useSponsors.js";
import SponsorLogo from "./SponsorLogo.jsx";

function LogoRow({ sponsors, hidden = false }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {sponsors.map((sponsor) => (
        <SponsorLogo key={sponsor.logo} sponsor={sponsor} hidden={hidden} />
      ))}
    </ul>
  );
}

export default function SponsorsStrip() {
  const sponsors = useSponsors();

  return (
    <section className="sponsors-strip" id="sponsors-strip" aria-label="Empresas e instituciones que acompañan a la Fundación">
      <p className="strip-title">Nos acompañan</p>
      <div className="marquee">
        <div className="marquee-track">
          <LogoRow sponsors={sponsors} />
          <LogoRow sponsors={sponsors} hidden />
        </div>
      </div>
    </section>
  );
}
