import { brand, img, tel, waLink } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'

const badgeIcons = ['bolt', 'shieldCheck', 'pin']

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 900px)" srcSet={img('hero', 'sm')} />
          <img src={img('hero')} alt="" width="2200" height="1467" fetchPriority="high" />
        </picture>
      </div>
      <svg className="hero__circuit" viewBox="0 0 600 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true" focusable="false">
        <path d="M0 120h180l40 40h140l30-30h210M0 300h90l60-60h120l40 40h290M0 470h220l50-50h330M380 0v90l-40 40v140M500 600V430l-40-40V250" />
        <circle cx="180" cy="120" r="5" />
        <circle cx="390" cy="130" r="5" />
        <circle cx="150" cy="240" r="5" />
        <circle cx="310" cy="280" r="5" />
        <circle cx="270" cy="420" r="5" />
        <circle cx="460" cy="390" r="5" />
      </svg>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow" data-reveal>
            <span className="pulse" aria-hidden="true" />
            {h.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title" data-reveal style={{ '--d': '80ms' }}>
            {h.title[0]}
            <span className="text-volt">{h.title[1]}</span>
            {h.title[2]}
          </h1>
          <p className="hero__lead" data-reveal style={{ '--d': '160ms' }}>
            {h.lead}
          </p>
          <div className="hero__actions" data-reveal style={{ '--d': '240ms' }}>
            <a className="btn btn--wa btn--lg" href={waLink(t.wa.hello)} target="_blank" rel="noopener">
              <Icon name="whatsapp" size={22} /> {h.primary}
            </a>
            <a className="btn btn--glass btn--lg" href={tel} aria-label={`${h.secondary}: ${brand.phone}`}>
              <Icon name="phone" size={20} /> {brand.phone}
            </a>
          </div>
          <ul className="hero__badges" data-reveal style={{ '--d': '320ms' }}>
            {h.badges.map((b, i) => (
              <li key={b}>
                <Icon name={badgeIcons[i]} size={18} /> {b}
              </li>
            ))}
          </ul>
        </div>

        <a className="hero__card glass" href="#contact" data-glow data-reveal style={{ '--d': '400ms' }}>
          <span className="hero__card-icon">
            <Icon name="send" size={22} />
          </span>
          <span className="hero__card-text">
            <strong>{h.card.title}</strong>
            <span>{h.card.text}</span>
          </span>
          <Icon name="arrow" size={20} className="hero__card-arrow" />
        </a>
      </div>
    </section>
  )
}
