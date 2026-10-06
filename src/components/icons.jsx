const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const Star = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2.8l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z"
    />
  </svg>
);

export const Home = (props) => (
  <svg {...base} {...props}>
    <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const Users = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5" />
    <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.9.7 3.2 2.5 3.5 5.2" />
  </svg>
);

export const Mic = (props) => (
  <svg {...base} {...props}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </svg>
);

export const Cap = (props) => (
  <svg {...base} {...props}>
    <path d="M2.5 9L12 4.5 21.5 9 12 13.5z" />
    <path d="M6.5 11v5c1.6 1.6 3.4 2.4 5.5 2.4s3.9-.8 5.5-2.4v-5M21.5 9v5" />
  </svg>
);

export const Diamond = (props) => (
  <svg {...base} {...props}>
    <path d="M6.5 4h11l4 5.5L12 20.5 2.5 9.5z" />
    <path d="M2.5 9.5h19M9 4l-1.5 5.5L12 20.5l4.5-11L15 4" />
  </svg>
);

export const Sparkles = (props) => (
  <svg {...base} {...props}>
    <path d="M10 3.5l1.6 4.4L16 9.5l-4.4 1.6L10 15.5l-1.6-4.4L4 9.5l4.4-1.6z" />
    <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
  </svg>
);

export const Store = (props) => (
  <svg {...base} {...props}>
    <path d="M4 9.5L5.5 4h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" />
    <path d="M5.5 12.5V20h13v-7.5M10 20v-4.5h4V20" />
  </svg>
);

export const Chat = (props) => (
  <svg {...base} {...props}>
    <path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12z" />
  </svg>
);

export const Calendar = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const Monitor = (props) => (
  <svg {...base} {...props}>
    <rect x="5.5" y="2.5" width="13" height="19" rx="3" />
    <path d="M10.5 18.5h3" />
  </svg>
);

export const Heart = (props) => (
  <svg {...base} {...props}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />
  </svg>
);

export const Eye = (props) => (
  <svg {...base} {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Shield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
);

export const Building = (props) => (
  <svg {...base} {...props}>
    <path d="M4 20.5V5.5L12 3v17.5M12 8.5l8 2.5v9.5M2.5 20.5h19M7.5 8h1M7.5 11.5h1M7.5 15h1M15.5 13.5h1M15.5 17h1" />
  </svg>
);

export const Briefcase = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18" />
  </svg>
);

export const Share = (props) => (
  <svg {...base} {...props}>
    <path d="M12 15V3.5M7.5 8L12 3.5 16.5 8M5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12" />
  </svg>
);

export const Dots = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="5" r="1.8" fill="currentColor" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    <circle cx="12" cy="19" r="1.8" fill="currentColor" />
  </svg>
);

export const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12.04 3.5a8.45 8.45 0 0 0-7.18 12.9l-1.02 3.73 3.82-1a8.43 8.43 0 0 0 4.38 1.22h.01a8.43 8.43 0 0 0-.01-16.85Zm0 15.42a6.98 6.98 0 0 1-3.56-.98l-.26-.15-2.26.6.6-2.2-.17-.28a6.98 6.98 0 1 1 5.65 3.01Zm3.82-5.23c-.2-.1-1.23-.61-1.42-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.67.82-.12.14-.25.16-.46.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.42.09-.09.21-.25.31-.37.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.13-.64-1.55-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.37.05-.56.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.1.14 1.47 2.25 3.57 3.15.5.22.89.35 1.19.44.5.16.96.14 1.32.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.05-.09-.19-.14-.4-.25Z"
    />
  </svg>
);

export const Instagram = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M8 3.75h8A4.26 4.26 0 0 1 20.25 8v8A4.26 4.26 0 0 1 16 20.25H8A4.26 4.26 0 0 1 3.75 16V8A4.26 4.26 0 0 1 8 3.75Zm0 1.5A2.75 2.75 0 0 0 5.25 8v8A2.75 2.75 0 0 0 8 18.75h8A2.75 2.75 0 0 0 18.75 16V8A2.75 2.75 0 0 0 16 5.25H8Zm4 3.37A3.38 3.38 0 1 1 12 15.37 3.38 3.38 0 0 1 12 8.62Zm0 1.5a1.88 1.88 0 1 0 0 3.75 1.88 1.88 0 0 0 0-3.75Zm4.08-2.18a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"
    />
  </svg>
);

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);
