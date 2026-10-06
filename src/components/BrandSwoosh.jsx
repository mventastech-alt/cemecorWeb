/** Las tres estelas y estrellas del logo, usadas como motivo gráfico. */
export default function BrandSwoosh({ className = "" }) {
  return (
    <svg className={`brand-swoosh ${className}`} viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <path d="M40 290C90 200 170 120 250 80" stroke="#A21D4F" strokeWidth="16" strokeLinecap="round" />
      <path d="M95 295C150 205 235 130 320 92" stroke="#F47A20" strokeWidth="16" strokeLinecap="round" />
      <path d="M150 298C210 215 295 150 385 118" stroke="#006B6F" strokeWidth="16" strokeLinecap="round" />
      <path d="M262 46l5 10.5 11.5 1.5-8.5 8 2 11.5-10-5.5-10 5.5 2-11.5-8.5-8 11.5-1.5z" fill="#A21D4F" />
      <path d="M318 22l4 8.5 9.5 1-7 6.5 1.8 9.5-8.3-4.5-8.3 4.5 1.8-9.5-7-6.5 9.5-1z" fill="#F47A20" />
      <path d="M366 6l3.5 7 7.5 1-5.5 5.2 1.4 7.6-6.9-3.7-6.9 3.7 1.4-7.6-5.5-5.2 7.5-1z" fill="#006B6F" />
    </svg>
  );
}
