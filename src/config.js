// Данные JARIZ Sp. z o.o. (KRS / gowork.pl, октябрь 2026). Тексты — в src/i18n/*.js
// __SITE_URL__ подставляет Vite; при запуске из node (scripts/fetch-images.js) его нет.
const envSiteUrl = typeof __SITE_URL__ !== 'undefined' ? __SITE_URL__ : ''

export const brand = {
  name: 'JARIZ',
  fullName: 'JARIZ Sp. z o.o.',
  legalName: 'JARIZ SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  // TODO: заменить на свой домен, когда он появится (или задать SITE_URL при сборке)
  siteUrl: envSiteUrl || 'https://jariz.pl',
  phone: '+48 662 511 453',
  whatsapp: '48662511453',
  // TODO: настоящий e-mail фирмы (пока заглушка)
  email: 'kontakt@jariz.pl',
  street: 'ul. Żmigrodzka 41/49 lok. 312',
  postalCode: '60-171',
  city: 'Poznań',
  region: 'wielkopolskie',
  country: 'PL',
  nip: '7792596181',
  krs: '0001201042',
  regon: '543036397',
  capital: '20 000 zł',
  founded: '2025-10-20',
  // TODO: уточнить часы работы
  hours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' }],
}

export const tel = `tel:${brand.phone.replace(/\s/g, '')}`
export const waLink = (text = '') => `https://wa.me/${brand.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const mailLink = (subject = '', body = '') => {
  const q = [subject && `subject=${encodeURIComponent(subject)}`, body && `body=${encodeURIComponent(body)}`].filter(Boolean).join('&')
  return `mailto:${brand.email}${q ? `?${q}` : ''}`
}
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.street.replace(/ lok\. \d+/, '')}, ${brand.postalCode} ${brand.city}`)}`

export const img = (name, size) => `/images/${name}${size === 'sm' ? '-sm' : ''}.webp`

// Услуги (порядок карточек; id = фото public/images/<id>.webp); тексты — t.services.items[id]
export const services = ['electrical', 'lowvoltage', 'cctv', 'alarm', 'sensors', 'measurements']

// Галерея «zakres prac» (фото Unsplash); подписи — t.gallery.alts[id]
export const gallery = ['panel', 'cables', 'camera-wall', 'breakers', 'smartlock', 'hero']

// Разделы в меню (якоря)
export const navIds = ['services', 'licenses', 'process', 'faq', 'contact']
