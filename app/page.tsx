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
import { faqs } from "@/lib/faqs"

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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default async function Home() {
  const rating = await fetchAppStoreRating()

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trevvy',
    description: 'Track shared costs, settle balances, and enjoy your trip with friends. The simple, fast, and stress-free way to split travel expenses — share a trip so everyone adds expenses together.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: ['iOS', 'Android'],
    url: 'https://trevvy.app',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Expense splitting with optimized settlement',
      'Trip sharing with live updates',
      'QR receipt scanning for 27 countries',
      'Multi-currency support with live exchange rates',
      'Spending analytics and charts',
      'Offline-first; optional account for backup and sharing',
      'Trip Pass for single-trip premium access',
    ],
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
      <Header />
      <Hero />
      <Features />
      <SupportedCountries />
      <HowItWorks />
      <AppPreview />
      <FAQ />
      <DownloadCTA />
      <Support />
      <Footer />
    </main>
  )
}
