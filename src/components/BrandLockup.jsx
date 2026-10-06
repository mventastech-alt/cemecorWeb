import BrandMark from "./BrandMark.jsx";

/** Logo horizontal: isotipo + "CEMECOR" + bajada, en texto real para que se vea nítido. */
export default function BrandLockup({ className = "" }) {
  return (
    <span className={`brand-lockup ${className}`}>
      <BrandMark />
      <span className="brand-text">
        <strong>CEMECOR</strong>
        <small>
          Fundación de Emprendedoras
          <br />y Mujeres Empresarias de Córdoba
        </small>
      </span>
    </span>
  );
}
