export const ASSETS = {
  logo: "/assets/logo-cemecor.png",
  founder: "/assets/eliana-cassaro.png",
  heroSlides: [
    {
      src: "/assets/hero-cemecor-encuentro.png",
      alt: "Mujeres participando de un encuentro institucional CEMECOR",
      position: "center 52%",
    },
    {
      src: "/assets/hero-cemecor-retrato.png",
      alt: "Representante de CEMECOR en espacio institucional",
      position: "center 48%",
    },
    {
      src: "/assets/hero-cemecor-grupo.png",
      alt: "Grupo de mujeres de la comunidad CEMECOR",
      position: "center 50%",
    },
    {
      src: "/assets/hero-cemecor-bandera.png",
      alt: "Grupo CEMECOR con bandera institucional en actividad comunitaria",
      position: "center 48%",
    },
    {
      src: "/assets/hero-cemecor-institucional.png",
      alt: "Mujeres de CEMECOR sosteniendo una bandera institucional",
      position: "center 66%",
    },
    {
      src: "/assets/hero-cemecor-capacitacion-sala.jpg",
      alt: "Encuentro de formación CEMECOR con audiencia en sala",
      position: "center 42%",
    },
    {
      src: "/assets/hero-cemecor-conversacion.jpg",
      alt: "Conversación entre mujeres en un espacio de CEMECOR",
      position: "center 32%",
    },
    {
      src: "/assets/hero-cemecor-marco-juridico.jpg",
      alt: "Charla sobre marco jurídico para emprendedoras y empresarias",
      position: "center 36%",
    },
  ],
};

export const CONTACT_LINKS = {
  whatsappLabel: "WhatsApp",
  whatsappUrl: "https://wa.me/5493516097819",
  instagramLabel: "Instagram",
  instagramUrl: "https://instagram.com/cemecor.ok",
  email: "info@fundacioncemecor.com.ar",
  emailUrl: "mailto:info@fundacioncemecor.com.ar",
  platformUrl: "https://cemecorcba.web.app/",
};

const APP_ORIGIN = "https://cemecorcba.web.app";

/** Link a la app con etiqueta de origen para medir qué sección trae cada visita. */
export function appLink(path, content) {
  const params = new URLSearchParams({
    utm_source: "web",
    utm_medium: "landing",
    utm_content: content,
  });
  return `${APP_ORIGIN}${path}?${params}`;
}

export const APP_PATHS = {
  signup: "/quiero-ser-socia",
  guest: "/invitada/inicio",
  login: "/login",
  home: "/",
};

export const SPONSORS = [
  { name: "Gobierno de la Provincia de Córdoba", logo: "/assets/partners/gobierno-cordoba.png" },
  { name: "Enjoy STI", logo: "/assets/partners/enjoy-sti.png" },
  { name: "Impulsa Argentina", logo: "/assets/partners/impulsa-argentina.png", wide: true },
  { name: "Dale! 93.1 FM", logo: "/assets/partners/dale-fm.png" },
  { name: "CPC General Paz", logo: "/assets/partners/cpc-general-paz.png" },
  { name: "Brennan", logo: "/assets/partners/brennan.png" },
  { name: "DIBACO Amoblamientos", logo: "/assets/partners/dibaco-amoblamientos.png" },
  { name: "Giraudo Equipamiento", logo: "/assets/partners/giraudo-equipamiento.png" },
  { name: "Just", logo: "/assets/partners/just.png" },
  { name: "Tres Reflejos Retratos", logo: "/assets/partners/tres-reflejos.png" },
  { name: "Favi Gonzalez by Bliss", logo: "/assets/partners/favi-gonzalez.png" },
  { name: "VIDA cowork.", logo: "/assets/partners/vida-cowork.png" },
  { name: "Cassaro Matafuegos", logo: "/assets/partners/cassaro-matafuegos.png" },
  { name: "Tarde de Mujeres", logo: "/assets/partners/tarde-de-mujeres.png" },
  { name: "Xis Producciones", logo: "/assets/partners/xis-producciones.png" },
  { name: "EspaTrends Argentina", logo: "/assets/partners/espatrends-argentina.png" },
  { name: "Viajes TDH Urca", logo: "/assets/partners/viajes-tdh-urca-horizontal.png", wide: true },
  { name: "Cassaro Chopp", logo: "/assets/partners/cassaro-chopp.png" },
  { name: "Fitness Group", logo: "/assets/partners/fitness-group.png" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Llegué a la Fundación buscando contactos y encontré mujeres que entienden lo que es emprender. Ya no camino sola.",
    name: "Carolina",
    role: "Pastelería artesanal",
  },
  {
    quote:
      "Cada encuentro me deja una herramienta nueva y un vínculo valioso. Y saber que mi cuota sostiene la Fundación me hace sentir parte de algo más grande.",
    name: "Lucía",
    role: "Estudio contable",
  },
  {
    quote:
      "Llevo años al frente de mi empresa y nunca había tenido un espacio así: mujeres que lideran y se impulsan entre sí.",
    name: "Sofía",
    role: "Empresa de eventos",
  },
];
