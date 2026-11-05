'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { StoreButtons } from '@/components/store-buttons'
import { localeInfo, type Locale } from '@/lib/i18n/config'
import { joinTexts, pickJoinLocale } from '@/lib/i18n/join'
import { openTexts, type OpenAction } from '@/lib/i18n/open'
import type { StorePlacement } from '@/lib/store-links'

const DEEP_LINKS: Record<OpenAction, string> = {
  scan: 'trevvy://open/scan',
  newTrip: 'trevvy://open/new-trip',
}
const PLACEMENTS: Record<OpenAction, StorePlacement> = {
  scan: 'open-scan',
  newTrip: 'open-new-trip',
}

/**
 * Fallback for https://trevvy.app/open/<action> when the app did not take the
 * link over (not installed, or the universal link is not refreshed yet). There
 * is deliberately no automatic redirect to a store: the visitor chooses.
 */
export function OpenPage({ action }: { action: OpenAction }) {
  const [locale, setLocale] = useState<Locale | null>(null)

  // The language is only known in the browser, so the static HTML stays empty
  // and the first client render matches it (same approach as app/not-found.tsx).
  useEffect(() => {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
    const picked = pickJoinLocale(languages)
    setLocale(picked)

    const html = document.documentElement
    const previousLang = html.lang
    html.lang = localeInfo[picked].htmlLang
    return () => {
      html.lang = previousLang
    }
  }, [])

  if (locale === null) {
    return null
  }

  const texts = openTexts[locale][action]

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-sm w-full gap-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-[28%] bg-primary/20 blur-2xl scale-110" />
          <Image
            src="/trevvy-app-icon.png"
            alt="Trevvy"
            width={96}
            height={96}
            className="relative rounded-[28%] shadow-lg"
            priority
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{texts.title}</h1>
          <p className="text-base text-muted-foreground leading-relaxed">{texts.subtitle}</p>
        </div>

        <StoreButtons placement={PLACEMENTS[action]} deepLink={DEEP_LINKS[action]} texts={joinTexts[locale].join} />
      </div>
    </main>
  )
}
