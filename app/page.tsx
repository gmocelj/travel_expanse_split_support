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

export default function Home() {
  return (
    <main className="min-h-screen">
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
