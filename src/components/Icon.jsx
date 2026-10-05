// Линейные иконки 24×24 (stroke = currentColor); WhatsApp — заливкой
const paths = {
  electrical: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2v4H8zM14 7h2v4h-2zM8 15h8M12 15v3" />
    </>
  ),
  lowvoltage: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <path d="M6.5 7.5h.01M9.5 7.5h.01M12.5 7.5h.01M15.5 7.5h.01M8 11v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M12 16v5" />
    </>
  ),
  cctv: (
    <>
      <path d="M3 7.5 15.5 4l2 6L5 13.5z" />
      <path d="m17.5 10 3 1.2-1 3-3-1M8.5 12.5 9.5 16H5v5M5 18.5H3" />
    </>
  ),
  alarm: (
    <>
      <path d="M6 18v-6a6 6 0 0 1 12 0v6" />
      <path d="M4 18h16v3H4zM12 2v2M4.2 5.2l1.4 1.4M19.8 5.2l-1.4 1.4M12 10v4" />
    </>
  ),
  sensors: (
    <>
      <circle cx="12" cy="13" r="3" />
      <path d="M7.8 8.8a6 6 0 0 0 0 8.4M16.2 8.8a6 6 0 0 1 0 8.4M5 6a10 10 0 0 0 0 14M19 6a10 10 0 0 1 0 14" />
    </>
  ),
  measurements: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <rect x="8" y="5.5" width="8" height="5" rx="1" />
      <circle cx="12" cy="16" r="2.5" />
      <path d="m12 16 1.5-1.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V4.5A1.5 1.5 0 0 1 5.5 3h8A1.5 1.5 0 0 1 15 4.5V21M15 9h3.5A1.5 1.5 0 0 1 20 10.5V21M2.5 21h19" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9.5" r="2.6" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  phone: <path d="M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />,
  bolt: <path d="M13 2.5 4.5 13.5H11L10 21.5l8.5-11H12z" />,
  shieldCheck: (
    <>
      <path d="M12 2.5 20 5.5v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  send: <path d="M21.5 2.5 10.5 13.5M21.5 2.5l-7 19-4-8-8-4z" />,
}

const filled = {
  whatsapp: (
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.3-1.4A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z" />
  ),
}

export default function Icon({ name, size = 24, className = '', ...rest }) {
  const isFilled = name in filled
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {isFilled ? filled[name] : paths[name]}
    </svg>
  )
}
