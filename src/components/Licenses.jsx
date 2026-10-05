import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Licenses() {
  const { t } = useLang()
  const l = t.licenses
  return (
    <section className="section section--alt" id="licenses" aria-labelledby="licenses-title">
      <div className="container">
        <SectionHead id="licenses-title" eyebrow={l.eyebrow} title={l.title} lead={l.lead} />
        <div className="licenses">
          {l.items.map((item, i) => (
            <article key={item.code} className="license glass" data-glow data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="license__code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <aside className="company glass" data-reveal style={{ '--d': '160ms' }}>
            <h3>
              <Icon name="building" size={22} /> {l.company.title}
            </h3>
            <dl>
              {l.company.rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="company__note">{l.company.note}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
