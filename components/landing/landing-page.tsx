import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { SupportedCountries } from "@/components/landing/supported-countries"
import { AppPreview } from "@/components/landing/app-preview"
import { FAQ } from "@/components/landing/faq"
import { DownloadCTA } from "@/components/landing/download-cta"
import { Support } from "@/components/landing/support"
import { Footer } from "@/components/landing/footer"
import { getDictionary, homeUrl, localeInfo, type Locale } from "@/lib/i18n"

const APP_STORE_ID = '6754640654'

async function fetchAppStoreRating(): Promise<{ ratingValue: string; ratingCount: string } | null> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${APP_STORE_ID}`,
      { next: { revalidate: false } },
    )
    if (!res.ok) return null
    const data = await res.json()
    const app = data?.results?.[0]
    if (!app?.averageUserRating || !app?.userRatingCount) return null
    return {
      ratingValue: app.averageUserRating.toFixed(1),
      ratingCount: String(app.userRatingCount),
    }
  } catch {
    return null
  }
}

/** The landing page in one language, with its structured data. */
export async function LandingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const rating = await fetchAppStoreRating()
  const inLanguage = localeInfo[locale].htmlLang

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage,
    mainEntity: t.faq.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trevvy',
    description: t.schema.description,
    inLanguage,
    applicationCategory: 'TravelApplication',
    operatingSystem: ['iOS', 'Android'],
    url: homeUrl(locale),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: t.schema.featureList,
    screenshot: [
      'https://trevvy.app/screenshots/expenses-list.png',
      'https://trevvy.app/screenshots/travels-list.png',
      'https://trevvy.app/screenshots/analytics-chart.png',
      'https://trevvy.app/screenshots/settlement-payments.png',
    ],
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        ratingCount: rating.ratingCount,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header locale={locale} t={t.nav} />
      <Hero t={t.hero} />
      <Features t={t.features} />
      <SupportedCountries t={t.countries} />
      <HowItWorks t={t.howItWorks} />
      <AppPreview t={t.preview} />
      <FAQ t={t.faq} />
      <DownloadCTA t={t.cta} hero={t.hero} />
      <Support t={t.support} />
      <Footer locale={locale} t={t.footer} nav={t.nav} />
    </main>
  )
}
