import { useState } from "react";

const WIDE_RATIO = 2.2;

/** Ítem de logo que ocupa doble ancho cuando la imagen es muy apaisada. */
export default function SponsorLogo({ sponsor, hidden = false, linked = false }) {
  const [wide, setWide] = useState(Boolean(sponsor.wide));

  const handleLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalHeight) setWide(Boolean(sponsor.wide) || naturalWidth / naturalHeight >= WIDE_RATIO);
  };

  const image = (
    <img
      src={sponsor.logo}
      alt={hidden ? "" : sponsor.name}
      loading="lazy"
      decoding="async"
      onLoad={handleLoad}
    />
  );

  return (
    <li className={wide ? "is-wide" : undefined}>
      {linked && sponsor.link ? (
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" title={sponsor.name}>
          {image}
        </a>
      ) : (
        image
      )}
    </li>
  );
}
