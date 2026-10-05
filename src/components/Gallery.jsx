import { gallery, img } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import SectionHead from './SectionHead.jsx'

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery
  return (
    <section className="section section--tight" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHead id="gallery-title" eyebrow={g.eyebrow} title={g.title} />
        <ul className="gallery">
          {gallery.map((id, i) => (
            <li key={id} className="gallery__item" data-reveal style={{ '--d': `${(i % 3) * 60}ms` }}>
              <figure>
                <img src={img(id, 'sm')} alt={g.alts[id]} width="600" height="400" loading="lazy" decoding="async" />
                <figcaption>{g.alts[id]}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
