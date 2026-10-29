import { test } from 'node:test'
import assert from 'node:assert/strict'

for (const locale of ['en', 'sr', 'hr', 'bs', 'ru', 'de', 'es']) {
  test(`${locale}: receipt claims match verified store copy`, async () => {
    const { [locale]: dictionary } = await import(`../lib/i18n/dictionaries/${locale}.ts`)
    assert.equal(/\b27\b/.test(JSON.stringify(dictionary)), false, 'Unverified 27-country guarantee returned')
    assert.ok(dictionary.features.items.scan.description.includes('OCR'), 'Describe the alternative to country-specific QR formats')
    assert.ok(dictionary.schema.featureList.some((text) => text.includes('OCR')), 'Search metadata must describe OCR too')
  })
}
