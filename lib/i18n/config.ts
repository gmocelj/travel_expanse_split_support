// Languages of the landing page. English lives at "/", every other language at
// "/<code>/". The legal pages (privacy, account deletion) stay English-only.

export const SITE_URL = 'https://trevvy.app'

export const locales = ['en', 'sr', 'hr', 'bs', 'ru', 'de', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Every language except English, i.e. the ones under app/[lang]/. */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale)

type LocaleInfo = {
  /** Name of the language in that language, for the language switcher. */
  nativeName: string
  /** Value of <html lang>. Serbian is written in Latin script on the site. */
  htmlLang: string
  /** Open Graph locale. */
  ogLocale: string
}

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { nativeName: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  sr: { nativeName: 'Srpski', htmlLang: 'sr-Latn', ogLocale: 'sr_RS' },
  hr: { nativeName: 'Hrvatski', htmlLang: 'hr', ogLocale: 'hr_HR' },
  bs: { nativeName: 'Bosanski', htmlLang: 'bs', ogLocale: 'bs_BA' },
  ru: { nativeName: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU' },
  de: { nativeName: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  es: { nativeName: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Path of the landing page in a language: "/" for English, "/sr/" for Serbian. */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`
}

export function homeUrl(locale: Locale): string {
  return `${SITE_URL}${homePath(locale)}`
}

/** hreflang map of the landing page, shared by the page metadata and the sitemap. */
export function homeAlternates(): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, homeUrl(l)])),
    'x-default': homeUrl(defaultLocale),
  }
}
