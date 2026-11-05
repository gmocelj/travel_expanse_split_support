// Unit tests for the store page deep link fallback texts (lib/i18n/open.ts).
// Node runs the TypeScript source directly (type stripping), no build needed.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { openTexts } from '../lib/i18n/open.ts'

const LOCALES = ['en', 'sr', 'hr', 'bs', 'ru', 'de', 'es']
const ACTIONS = ['scan', 'newTrip']

test('every language has scan and newTrip texts, non-empty', () => {
  assert.deepEqual(Object.keys(openTexts).sort(), [...LOCALES].sort())
  for (const code of LOCALES) {
    assert.deepEqual(Object.keys(openTexts[code]).sort(), [...ACTIONS].sort(), `${code} actions`)
    for (const action of ACTIONS) {
      assert.deepEqual(
        Object.keys(openTexts[code][action]).sort(),
        ['subtitle', 'title'],
        `${code}.${action} keys`,
      )
      for (const [key, value] of Object.entries(openTexts[code][action])) {
        assert.equal(typeof value, 'string', `${code}.${action}.${key}`)
        assert.ok(value.trim().length > 0, `${code}.${action}.${key} is empty`)
      }
    }
  }
})

test('non-English texts are translated', () => {
  for (const code of LOCALES.filter((c) => c !== 'en')) {
    for (const action of ACTIONS) {
      assert.notEqual(openTexts[code][action].title, openTexts.en[action].title, `${code}.${action}.title`)
      assert.notEqual(openTexts[code][action].subtitle, openTexts.en[action].subtitle, `${code}.${action}.subtitle`)
    }
  }
})

test('scan and newTrip texts differ within a language', () => {
  for (const code of LOCALES) {
    assert.notEqual(openTexts[code].scan.title, openTexts[code].newTrip.title, `${code} titles`)
  }
})
