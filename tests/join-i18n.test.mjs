// Unit tests for the invitation / 404 page texts (lib/i18n/join.ts). Node runs
// the TypeScript source directly (type stripping), no build needed.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { joinTexts, pickJoinLocale } from '../lib/i18n/join.ts'

const LOCALES = ['en', 'sr', 'hr', 'bs', 'ru', 'de', 'es']

const cases = [
  [['ru-RU', 'en'], 'ru'],
  [['sr-Cyrl-RS'], 'sr'],
  [['sr-Latn'], 'sr'],
  [['sr'], 'sr'],
  [['fr', 'de-AT'], 'de'],
  [['HR-hr'], 'hr'],
  [['bs-BA'], 'bs'],
  [['es-419'], 'es'],
  [['en-GB', 'de'], 'en'],
  [[], 'en'],
  [['fr'], 'en'],
  [['', 'fr-CA'], 'en'],
]

for (const [languages, expected] of cases) {
  test(`pickJoinLocale(${JSON.stringify(languages)}) → ${expected}`, () => {
    assert.equal(pickJoinLocale(languages), expected)
  })
}

test('every language has every join and notFound text, non-empty', () => {
  assert.deepEqual(Object.keys(joinTexts).sort(), [...LOCALES].sort())
  const reference = joinTexts.en
  for (const code of LOCALES) {
    for (const section of ['join', 'notFound']) {
      assert.deepEqual(
        Object.keys(joinTexts[code][section]).sort(),
        Object.keys(reference[section]).sort(),
        `${code}.${section} keys differ from en`,
      )
      for (const [key, value] of Object.entries(joinTexts[code][section])) {
        assert.equal(typeof value, 'string', `${code}.${section}.${key}`)
        assert.ok(value.trim().length > 0, `${code}.${section}.${key} is empty`)
      }
    }
  }
})

test('the hint quotes the "open in app" button label in every language', () => {
  for (const code of LOCALES) {
    const { hint, openInApp } = joinTexts[code].join
    assert.ok(hint.includes(openInApp), `${code}: hint should mention "${openInApp}"`)
  }
})

test('non-English texts are actually translated', () => {
  for (const code of LOCALES.filter((c) => c !== 'en')) {
    assert.notEqual(joinTexts[code].join.title, joinTexts.en.join.title, `${code}.join.title`)
    assert.notEqual(joinTexts[code].notFound.title, joinTexts.en.notFound.title, `${code}.notFound.title`)
  }
})
