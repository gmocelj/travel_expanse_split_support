import type { Metadata } from "next"
import { LandingPage } from "@/components/landing/landing-page"
import { landingMetadata } from "@/lib/i18n/metadata"

export const metadata: Metadata = landingMetadata('en')

export default function Home() {
  return <LandingPage locale="en" />
}
