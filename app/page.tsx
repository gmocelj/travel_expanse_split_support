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

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Trevvy',
  description: 'Track shared costs, settle balances, and enjoy your trip with friends. The simple, fast, and stress-free way to split travel expenses — no account required.',
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
    'QR receipt scanning for 27 countries',
    'Multi-currency support with live exchange rates',
    'Spending analytics and charts',
    'Offline-first, no account required',
    'Trip Pass for single-trip premium access',
  ],
  screenshot: [
    'https://trevvy.app/screenshots/expenses-list.png',
    'https://trevvy.app/screenshots/travels-list.png',
    'https://trevvy.app/screenshots/analytics-chart.png',
    'https://trevvy.app/screenshots/settlement-payments.png',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Trevvy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trevvy is a travel expense splitting app for iOS and Android. Create a trip, add friends, log shared expenses, and Trevvy calculates who owes what — with optimized settlement suggestions so everyone pays as few transfers as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trevvy free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Creating trips, adding participants, logging expenses, and viewing balances is completely free with up to 7 active trips. Premium unlocks QR/OCR receipt scanning, multi-currency support, analytics dashboard, and unlimited trips.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does QR receipt scanning work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Point your camera at a fiscal receipt QR code and Trevvy reads the total amount, currency, tax ID, and invoice number directly from the QR data. For most countries this works fully offline — no internet needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trevvy support multiple currencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With Premium you can log expenses in any currency. Trevvy fetches live exchange rates so all balances stay accurate regardless of which currencies were used.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data stored online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All trip data, expenses, and settings are stored locally on your device. Nothing is sent to external servers. To delete all data, simply uninstall the app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an account to use Trevvy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Trevvy works without sign-up or login. Just download and start creating trips immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Trip Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Trip Pass is a one-time purchase that unlocks all Premium features for a single trip for 17 days. It\'s ideal if you only need Premium for one trip without committing to a subscription.',
      },
    },
  ],
}

export default function Home() {
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
