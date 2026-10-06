export default function PhoneFrame({ src, alt, className = "", children, eager = false }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-island" aria-hidden="true" />
      <div className="phone-screen">
        {children ?? (
          <img src={src} alt={alt} width={1170} height={2532} loading={eager ? "eager" : "lazy"} decoding="async" />
        )}
      </div>
    </div>
  );
}
