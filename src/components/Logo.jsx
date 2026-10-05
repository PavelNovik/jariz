// Логотип: значок-молния в квадрате + словесный знак JARIZ (SVG, без растровых файлов)
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="16" fill="#0d131a" />
        <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="3" />
        <path d="M36 8 17 36h12l-3 20 21-30H34z" fill="currentColor" />
      </svg>
      <span className="logo__text">
        JARIZ<span className="logo__sub">sp. z o.o.</span>
      </span>
    </span>
  )
}
