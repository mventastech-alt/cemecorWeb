import { ASSETS, CONTACT_LINKS } from "../constants.js";

const navItems = [
  { href: "#fundacion", label: "Fundación" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#contacto", label: "Contacto" },
  { href: CONTACT_LINKS.instagramUrl, label: "Eventos", isExternal: true, isButton: true },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img className="brand-logo" src={ASSETS.logo} alt="Logo CEMECOR" />
        </a>
        <nav className="menu" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              className={item.isButton ? "menu-event-button" : undefined}
              href={item.href}
              key={item.href}
              rel={item.isExternal ? "noreferrer" : undefined}
              target={item.isExternal ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn outline" href={CONTACT_LINKS.platformUrl}>
            Ingresar a la plataforma
          </a>
          <a className="btn primary" href="#contacto">
            Quiero sumarme
          </a>
        </div>
        <details className="mobile-toggle">
          <summary>Menú</summary>
          <nav className="mobile-panel" aria-label="Navegación mobile">
            {navItems.map((item) => (
              <a
                className={item.isButton ? "menu-event-button" : undefined}
                href={item.href}
                key={item.href}
                rel={item.isExternal ? "noreferrer" : undefined}
                target={item.isExternal ? "_blank" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="btn primary" href="#contacto">
              Quiero sumarme
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
