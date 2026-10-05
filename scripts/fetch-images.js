// Готовит все изображения сайта в public/:
// 1) scripts/images.json — фото с Unsplash → public/images/<name>.webp и <name>-sm.webp;
// 2) public/favicon.svg → favicon-32.png, favicon-192.png, apple-touch-icon.png, logo.png (для Schema.org);
// 3) og-image.jpg (1200×630): фото hero + затемнение + логотип.
// Запуск: npm run images. Свои фото — просто положите WebP с тем же именем в public/images.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const pub = path.resolve('public')
const out = path.join(pub, 'images')
fs.mkdirSync(out, { recursive: true })

async function download(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

const list = JSON.parse(fs.readFileSync(path.resolve('scripts/images.json'), 'utf8'))
for (const [name, img] of Object.entries(list)) {
  const buf = await download(`${img.src}?w=${img.width}&q=90&fm=jpg${img.params ? `&${img.params}` : ''}`)
  const meta = await sharp(buf).metadata()
  const full = Math.min(img.width, meta.width)
  await sharp(buf).resize({ width: full }).webp({ quality: 76 }).toFile(path.join(out, `${name}.webp`))
  // -sm: карточки 3:2 (600×400), для hero — мобильный кадр 900 px
  const sm = name === 'hero' ? sharp(buf).resize({ width: 900 }) : sharp(buf).resize(600, 400, { fit: 'cover' })
  await sm.webp({ quality: 74 }).toFile(path.join(out, `${name}-sm.webp`))
  console.log(`  ${name}  ${meta.width}×${meta.height}`)
}

const icon = fs.readFileSync(path.join(pub, 'favicon.svg'))
for (const [file, size] of [['favicon-32.png', 32], ['favicon-192.png', 192], ['apple-touch-icon.png', 180], ['logo.png', 512]]) {
  await sharp(icon, { density: 600 }).resize(size, size).png().toFile(path.join(pub, file))
}
console.log('  favicons, logo.png')

const bg = await sharp(path.join(out, 'hero.webp')).resize(1200, 630, { fit: 'cover', position: 'right' }).toBuffer()
const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0a0e13" stop-opacity=".96"/><stop offset=".55" stop-color="#0a0e13" stop-opacity=".7"/><stop offset="1" stop-color="#0a0e13" stop-opacity=".15"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(80 170)">
    <rect width="96" height="96" rx="24" fill="#0d131a" stroke="#ffd21f" stroke-opacity=".4" stroke-width="4"/>
    <path transform="scale(1.5)" d="M36 8 17 36h12l-3 20 21-30H34z" fill="#ffd21f"/>
    <text x="124" y="74" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="76" fill="#f3f6f9" letter-spacing="4">JARIZ</text>
    <text x="0" y="170" font-family="Arial, sans-serif" font-size="38" fill="#f3f6f9">Instalacje elektryczne · Alarmy · CCTV</text>
    <text x="0" y="226" font-family="Arial, sans-serif" font-size="30" fill="#ffd21f">Uprawnienia SEP i UDT · Poznań</text>
  </g>
</svg>`)
await sharp(bg).composite([{ input: overlay }]).jpeg({ quality: 84 }).toFile(path.join(pub, 'og-image.jpg'))
console.log('  og-image.jpg')
