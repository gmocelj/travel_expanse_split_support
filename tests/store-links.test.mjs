// Unit tests for store campaign links (lib/store-links.ts).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  APP_STORE_ID,
  PLAY_PACKAGE,
  STORE_PLACEMENTS,
  appStoreUrl,
  appStoreUrlWith,
  campaignName,
  googlePlayUrl,
} from '../lib/store-links.ts'

test('every placement campaign name is at most 30 characters (Apple ct limit)', () => {
  for (const placement of STORE_PLACEMENTS) {
    const name = campaignName(placement)
    assert.ok(name.length <= 30, `${name} is ${name.length} chars`)
    assert.match(name, /^web-[a-z-]+$/)
  }
})

test('placements cover the landing page, join and both open pages', () => {
  assert.deepEqual(
    [...STORE_PLACEMENTS].sort(),
    ['cta', 'footer', 'header', 'hero', 'join', 'menu', 'open-new-trip', 'open-scan'],
  )
})

test('app store url has pt, ct and mt=8 when a token is set', () => {
  const url = new URL(appStoreUrlWith('123abc', 'hero'))
  assert.equal(url.origin + url.pathname, `https://apps.apple.com/app/trevvy/id${APP_STORE_ID}`)
  assert.equal(url.searchParams.get('pt'), '123abc')
  assert.equal(url.searchParams.get('ct'), 'web-hero')
  assert.equal(url.searchParams.get('mt'), '8')
})

test('app store url has no query when the token is empty', () => {
  const expected = `https://apps.apple.com/app/trevvy/id${APP_STORE_ID}`
  assert.equal(appStoreUrlWith('', 'hero'), expected)
})

test('shipped app store url carries the Trevvy provider token and placement campaign', () => {
  const url = new URL(appStoreUrl('footer'))
  assert.equal(url.searchParams.get('pt'), '127792819')
  assert.equal(url.searchParams.get('ct'), 'web-footer')
  assert.equal(url.searchParams.get('mt'), '8')
})

test('play url referrer decodes to utm_source=trevvy.app, utm_medium=website, utm_campaign=web-hero', () => {
  const url = new URL(googlePlayUrl('hero'))
  const referrer = url.searchParams.get('referrer')
  assert.equal(referrer, 'utm_source=trevvy.app&utm_medium=website&utm_campaign=web-hero')
})

test('play url keeps id=com.gmocelj.travel_expanse_split', () => {
  const url = new URL(googlePlayUrl('footer'))
  assert.equal(url.origin + url.pathname, 'https://play.google.com/store/apps/details')
  assert.equal(url.searchParams.get('id'), PLAY_PACKAGE)
  assert.equal(PLAY_PACKAGE, 'com.gmocelj.travel_expanse_split')
})
