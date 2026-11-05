export const APP_STORE_ID = '6754640654'
export const PLAY_PACKAGE = 'com.gmocelj.travel_expanse_split'

/** App Store Connect provider token (public, same for every campaign). Empty means no pt/ct. */
export const APPLE_PROVIDER_TOKEN = '127792819'

export const STORE_PLACEMENTS = [
  'header',
  'menu',
  'hero',
  'cta',
  'footer',
  'join',
  'open-scan',
  'open-new-trip',
] as const

export type StorePlacement = (typeof STORE_PLACEMENTS)[number]

const APP_STORE_BASE = `https://apps.apple.com/app/trevvy/id${APP_STORE_ID}`
const PLAY_BASE = 'https://play.google.com/store/apps/details'

/** Coarse campaign name; Apple limits `ct` to 30 characters. */
export function campaignName(placement: StorePlacement): string {
  return `web-${placement}`
}

export function appStoreUrlWith(token: string, placement: StorePlacement): string {
  if (token === '') return APP_STORE_BASE
  const url = new URL(APP_STORE_BASE)
  url.searchParams.set('pt', token)
  url.searchParams.set('ct', campaignName(placement))
  url.searchParams.set('mt', '8')
  return url.toString()
}

export function appStoreUrl(placement: StorePlacement): string {
  return appStoreUrlWith(APPLE_PROVIDER_TOKEN, placement)
}

export function googlePlayUrl(placement: StorePlacement): string {
  const referrer = new URLSearchParams({
    utm_source: 'trevvy.app',
    utm_medium: 'website',
    utm_campaign: campaignName(placement),
  }).toString()
  const url = new URL(PLAY_BASE)
  url.searchParams.set('id', PLAY_PACKAGE)
  url.searchParams.set('referrer', referrer)
  return url.toString()
}
