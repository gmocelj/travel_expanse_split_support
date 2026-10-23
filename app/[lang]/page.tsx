import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LandingPage } from "@/components/landing/landing-page"
import { isLocale, prefixedLocales } from "@/lib/i18n/config"
import { landingMetadata } from "@/lib/i18n/metadata"

// The landing page in every language except English (which is at "/").
// <html lang> is set per language after the build by scripts/set-html-lang.mjs.

export const dynamicParams = false

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }))
}

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return landingMetadata(lang)
}

export default async function LocalizedHome({ params }: Props) {
  const { lang } = await params
  if (!isLocale(lang) || lang === 'en') notFound()
  return <LandingPage locale={lang} />
}
