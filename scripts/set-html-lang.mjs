import path from 'path'
import { fileURLToPath } from 'url'
import { existsSync, readFileSync, writeFileSync } from 'fs'

// The static export renders every page with the root layout's <html lang="en">.
// Rewrite it in each localized landing page (out/<code>/index.html).
// Keep the map in sync with localeInfo in lib/i18n/config.ts.
const HTML_LANG = {
  sr: 'sr-Latn',
  hr: 'hr',
  bs: 'bs',
  ru: 'ru',
  de: 'de',
  es: 'es',
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'out')

for (const [code, lang] of Object.entries(HTML_LANG)) {
  const file = path.join(outDir, code, 'index.html')
  if (!existsSync(file)) {
    console.error(`❌ ${file} is missing`)
    process.exit(1)
  }
  const html = readFileSync(file, 'utf8')
  if (!html.includes('<html lang="en"')) {
    console.error(`❌ ${file}: no <html lang="en"> to replace`)
    process.exit(1)
  }
  writeFileSync(file, html.replace('<html lang="en"', `<html lang="${lang}"`))
  console.log(`🌐 ${code}/index.html → lang="${lang}"`)
}
