import { brand, mailLink, navIds, tel } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import { openCookieSettings } from './CookieConsent.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = 2026
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p>{f.tagline}</p>
        </div>
        <nav aria-label={t.nav.menu}>
          <ul className="footer__nav">
            {navIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav.items[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <p>
            <a href={tel}>{brand.phone}</a>
          </p>
          <p>
            <a href={mailLink()}>{brand.email}</a>
          </p>
          <p>
            {brand.street}, {brand.postalCode} {brand.city}
          </p>
          <p className="footer__ids">
            NIP {brand.nip} · KRS {brand.krs} · REGON {brand.regon}
          </p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {year} {brand.fullName}. {f.rights}
        </p>
        <p className="footer__meta">
          <button type="button" className="link-btn" onClick={openCookieSettings}>
            {f.cookies}
          </button>
          <span>{f.photos}</span>
          <a href="#main">{f.top} ↑</a>
        </p>
      </div>
    </footer>
  )
}
