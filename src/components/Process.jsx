import { useLang } from '../i18n/index.jsx'
import SectionHead from './SectionHead.jsx'

export default function Process() {
  const { t } = useLang()
  const p = t.process
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead id="process-title" eyebrow={p.eyebrow} title={p.title} center />
        <ol className="process">
          {p.steps.map((s, i) => (
            <li key={s.title} className="process__step" data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
