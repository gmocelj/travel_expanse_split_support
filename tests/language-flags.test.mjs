import { test } from 'node:test'
import assert from 'node:assert/strict'
import { localeInfo, locales } from '../lib/i18n/config.ts'

const flags = { en: '🇬🇧', sr: '🇷🇸', hr: '🇭🇷', bs: '🇧🇦', ru: '🇷🇺', de: '🇩🇪', es: '🇪🇸' }
for (const locale of locales) {
  test(`${locale}: language choice has its flag and readable native name`, () => {
    assert.equal(localeInfo[locale].flag, flags[locale])
    assert.ok(localeInfo[locale].nativeName.length > 0)
  })
}
