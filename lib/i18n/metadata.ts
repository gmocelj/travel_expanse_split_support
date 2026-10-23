import type { Metadata } from 'next'
import { getDictionary } from '.'
import { homeAlternates, homeUrl, localeInfo, locales, type Locale } from './config'

/** Metadata of the landing page in one language, with hreflang alternates. */
export function landingMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale)
  const url = homeUrl(locale)
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: url,
      languages: homeAlternates(),
    },
    openGraph: {
      type: 'website',
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
      url,
      siteName: 'Trevvy',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t.meta.ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: ['/og-image.png'],
    },
  }
}
