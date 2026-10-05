import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Licenses from './components/Licenses.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import CtaBand from './components/CtaBand.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import { useReveal } from './hooks/useReveal.js'
import { useEffectsFx } from './hooks/useEffectsFx.js'
import { LangProvider, langFromPath, langPath, useLang } from './i18n/index.jsx'
import { applyHead } from './seo.js'

export default function App({ initialLang }) {
  const [lang, setLangState] = useState(initialLang)
  const [preset, setPreset] = useState(null) // { service, at } — услуга, выбранная в карточке
  useReveal(lang)
  useEffectsFx()

  const setLang = useCallback(
    (next) => {
      if (next === lang) return
      history.pushState(null, '', langPath(next) + location.hash)
      setLangState(next)
    },
    [lang]
  )

  useEffect(() => {
    applyHead(lang)
  }, [lang])

  useEffect(() => {
    const onPop = () => setLangState(langFromPath(location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Кнопка в карточке услуги: выбрать услугу в форме и прокрутить к ней
  const ask = useCallback((service = '') => {
    setPreset({ service, at: Date.now() })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <LangProvider value={{ lang, setLang, ask, preset }}>
      <SkipLink />
      <div className="backdrop" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Licenses />
        <Process />
        <Gallery />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </LangProvider>
  )
}

function SkipLink() {
  const { t } = useLang()
  return <a href="#main" className="skip-link">{t.nav.skip}</a>
}
