// Checks the static export in out/ (run `pnpm build` first): every landing
// page language has its own lang, title, canonical, hreflang set and
// structured data, and the sitemap lists all of them.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { localeInfo } from '../lib/i18n/config.ts'

const SITE = 'https://trevvy.app'
const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'out')

// Keep in sync with localeInfo in lib/i18n/config.ts.
const LOCALES = {
  en: { dir: '', htmlLang: 'en', ogLocale: 'en_US', titleIncludes: 'Split Travel Expenses' },
  sr: { dir: 'sr', htmlLang: 'sr-Latn', ogLocale: 'sr_RS', titleIncludes: 'podelu troškova' },
  hr: { dir: 'hr', htmlLang: 'hr', ogLocale: 'hr_HR', titleIncludes: 'podjelu troškova' },
  bs: { dir: 'bs', htmlLang: 'bs', ogLocale: 'bs_BA', titleIncludes: 'podjelu troškova' },
  ru: { dir: 'ru', htmlLang: 'ru', ogLocale: 'ru_RU', titleIncludes: 'разделения расходов' },
  de: { dir: 'de', htmlLang: 'de', ogLocale: 'de_DE', titleIncludes: 'Reisekosten' },
  es: { dir: 'es', htmlLang: 'es', ogLocale: 'es_ES', titleIncludes: 'dividir gastos' },
}

const urlOf = (dir) => (dir ? `${SITE}/${dir}/` : `${SITE}/`)

function readPage(dir) {
  const file = path.join(outDir, dir, 'index.html')
  assert.ok(existsSync(file), `${file} is missing — run pnpm build first`)
  return readFileSync(file, 'utf8')
}

function jsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  )
}

for (const [code, l] of Object.entries(LOCALES)) {
  test(`${code}: html lang, title and Open Graph locale`, () => {
    const html = readPage(l.dir)
    assert.match(html, new RegExp(`<html lang="${l.htmlLang}"`))
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
    assert.ok(title.includes(l.titleIncludes), `title "${title}" should include "${l.titleIncludes}"`)
    assert.match(html, new RegExp(`property="og:locale" content="${l.ogLocale}"`))
  })

  test(`${code}: canonical and full hreflang set`, () => {
    const html = readPage(l.dir)
    assert.match(html, new RegExp(`<link rel="canonical" href="${urlOf(l.dir)}"/>`))
    for (const [other, o] of Object.entries(LOCALES)) {
      assert.match(html, new RegExp(`<link rel="alternate" hrefLang="${other}" href="${urlOf(o.dir)}"/>`))
    }
    assert.match(html, new RegExp(`<link rel="alternate" hrefLang="x-default" href="${SITE}/"/>`))
  })

  test(`${code}: SoftwareApplication and FAQPage structured data in the page language`, () => {
    const blocks = jsonLd(readPage(l.dir))
    const app = blocks.find((b) => b['@type'] === 'SoftwareApplication')
    const faq = blocks.find((b) => b['@type'] === 'FAQPage')
    assert.ok(app, 'SoftwareApplication JSON-LD missing')
    assert.ok(faq, 'FAQPage JSON-LD missing')
    assert.equal(app.inLanguage, l.htmlLang)
    assert.equal(app.url, urlOf(l.dir))
    assert.equal(faq.inLanguage, l.htmlLang)
    assert.ok(faq.mainEntity.length >= 10, 'FAQ should have at least 10 questions')
  })

  test(`${code}: country examples and receipt claims match the app listing`, () => {
    const html = readPage(l.dir)
    const section = html.match(/<section id="supported-countries"[\s\S]*?<\/section>/)?.[0] ?? ''
    assert.ok(section.includes('PURS fiscal receipt'))
    assert.ok(section.includes('Fiskalizacija fiscal receipt'))
    assert.equal((section.match(/class="text-2xl"/g) ?? []).length, 2, 'Only verified country examples should be advertised')
    const blocks = jsonLd(html)
    assert.ok(!/\b27\b/.test(JSON.stringify(blocks)), 'Old coverage promise in search structured data')
    assert.ok(section.includes('OCR'), 'The country-independent OCR alternative must stay visible')
  })

  test(`${code}: header and footer show language flags alongside language text`, () => {
    const html = readPage(l.dir)
    const header = html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? ''
    const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? ''
    assert.ok(header.includes(localeInfo[code].flag), 'Current language flag missing from header')
    for (const info of Object.values(localeInfo)) {
      assert.ok(footer.includes(info.flag), `Missing footer language flag: ${info.nativeName}`)
      assert.ok(footer.includes(info.nativeName), 'Flags must not replace readable language names')
    }
  })

  test(`${code}: links to every language`, () => {
    const html = readPage(l.dir)
    for (const o of Object.values(LOCALES)) {
      assert.ok(html.includes(`href="/${o.dir ? `${o.dir}/` : ''}"`), `missing link to /${o.dir}`)
    }
  })
}

test('legal pages stay English', () => {
  assert.match(readPage('privacy'), /<html lang="en"/)
  assert.match(readPage('delete-account'), /<html lang="en"/)
  assert.match(readPage('terms'), /<html lang="en"/)
})

test('terms page exists with canonical URL and key clauses', () => {
  const html = readPage('terms')
  assert.ok(html.includes(`<link rel="canonical" href="${SITE}/terms/"`), 'terms canonical missing')
  assert.match(html, /renews automatically/i)
  assert.match(html, /Trip Pass/)
  assert.match(html, /Licensed Application End User License Agreement/)
  const xml = readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8')
  assert.ok(xml.includes(`<loc>${SITE}/terms/</loc>`), 'sitemap misses /terms/')
})

test('footer links to the terms page on every landing page', () => {
  for (const l of Object.values(LOCALES)) {
    assert.ok(readPage(l.dir).includes('href="/terms/"'), `footer terms link missing on /${l.dir}`)
  }
})

test('sitemap lists every landing page with hreflang alternates', () => {
  const xml = readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8')
  for (const l of Object.values(LOCALES)) {
    assert.ok(xml.includes(`<loc>${urlOf(l.dir)}</loc>`), `sitemap misses ${urlOf(l.dir)}`)
  }
  assert.ok(xml.includes(`hreflang="x-default" href="${SITE}/"`))
})

test('Google Play icon uses the fixed path', () => {
  const html = readPage('')
  assert.ok(!html.includes('M3.18 23.76'), 'the broken Google Play SVG path is back')
})

test('AASA is valid JSON and lists /join/*, /auth/callback and /open/*', () => {
  const file = path.join(outDir, '.well-known', 'apple-app-site-association')
  assert.ok(existsSync(file), 'AASA missing from the export')
  const aasa = JSON.parse(readFileSync(file, 'utf8'))
  const details = aasa.applinks.details
  assert.equal(details.length, 1)
  assert.deepEqual(details[0].appIDs, ['QJGNU5HT8M.com.gmocelj.travelexpanseSplit'])
  const paths = details[0].components.map((c) => c['/'])
  assert.deepEqual(paths, ['/join/*', '/auth/callback', '/open/*'])
})

for (const action of ['scan', 'new-trip']) {
  test(`out/open/${action}/index.html exists with noindex`, () => {
    const html = readPage(`open/${action}`)
    assert.match(html, /<meta name="robots" content="noindex/)
  })
}

test('sitemap does not list /open/', () => {
  const xml = readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8')
  assert.ok(!xml.includes('/open/'), 'store link fallback pages must stay out of the sitemap')
})

test('join fallback still renders store buttons', () => {
  const src = readFileSync(path.join(outDir, '..', 'app', 'not-found.tsx'), 'utf8')
  assert.ok(src.includes('<StoreButtons'), 'JoinPage should use StoreButtons')
  const buttons = readFileSync(path.join(outDir, '..', 'components', 'store-buttons.tsx'), 'utf8')
  assert.ok(buttons.includes('appStoreUrl(placement)'))
  assert.ok(buttons.includes('googlePlayUrl(placement)'))
})

test('store URLs are built only in lib/store-links.ts', () => {
  const root = path.join(outDir, '..')
  const walk = (dir) =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    )
  for (const file of [...walk(path.join(root, 'app')), ...walk(path.join(root, 'components'))]) {
    if (!/\.(tsx?|mjs)$/.test(file)) continue
    const src = readFileSync(file, 'utf8')
    assert.ok(!/apps\.apple\.com|play\.google\.com/.test(src), `${file} hard-codes a store URL`)
  }
})

test('landing page store buttons carry a Play referrer with the placement', () => {
  const html = readPage('')
  // 'menu' (mobile) is only rendered after opening the menu, so it is not in the static HTML.
  for (const placement of ['header', 'hero', 'cta', 'footer']) {
    const referrer = encodeURIComponent(
      `utm_source=trevvy.app&utm_medium=website&utm_campaign=web-${placement}`,
    )
    assert.ok(html.includes(`referrer=${referrer}`), `missing referrer for ${placement}`)
  }
})
