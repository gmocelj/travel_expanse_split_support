'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { homePath, localeInfo, type Locale } from '@/lib/i18n/config'
import { joinTexts, pickJoinLocale, type JoinTexts } from '@/lib/i18n/join'

const APP_STORE_URL = 'https://apps.apple.com/app/trevvy/id6754640654'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split'

type PageState =
  | { kind: 'loading' }
  | { kind: 'join'; token: string; locale: Locale }
  | { kind: 'not-found'; locale: Locale }

function browserLocale(): Locale {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return pickJoinLocale(languages)
}

export default function NotFound() {
  const [pageState, setPageState] = useState<PageState>({ kind: 'loading' })

  // Path and language are only known in the browser, so the static HTML stays
  // empty ('loading') and the first client render matches it — no hydration
  // mismatch and no English flash before switching languages.
  useEffect(() => {
    const locale = browserLocale()
    const pathname = window.location.pathname
    if (pathname.startsWith('/join/')) {
      const token = pathname.split('/join/')[1]?.replace(/\/$/, '') ?? ''
      setPageState({ kind: 'join', token, locale })
    } else {
      setPageState({ kind: 'not-found', locale })
    }

    const html = document.documentElement
    const previousLang = html.lang
    html.lang = localeInfo[locale].htmlLang
    return () => {
      html.lang = previousLang
    }
  }, [])

  if (pageState.kind === 'loading') {
    return null
  }

  if (pageState.kind === 'join') {
    // The invite token comes from the URL; it is not a secret.
    return <JoinPage token={pageState.token} texts={joinTexts[pageState.locale].join} /> // secret-scan: allow
  }

  return (
    <NotFoundPage texts={joinTexts[pageState.locale].notFound} homeHref={homePath(pageState.locale)} />
  )
}

interface JoinPageProps {
  token: string
  texts: JoinTexts['join']
}

function JoinPage({ token, texts }: JoinPageProps) {
  const deepLink = `trevvy://join/${token}`

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-sm w-full gap-8">
        {/* App icon */}
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

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {texts.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {texts.subtitle}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 w-full">
          {/* Primary CTA */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base h-12 px-6 transition-all duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={texts.appStoreLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {texts.appStore}
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base h-12 px-6 transition-all duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={texts.googlePlayLabel}
          >
            {texts.googlePlay}
          </a>

          {/* Secondary: deep link */}
          <a
            href={deepLink}
            className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-secondary text-secondary-foreground font-medium text-base h-12 px-6 transition-all duration-150 hover:bg-secondary/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={texts.openInAppLabel}
          >
            {texts.openInApp}
          </a>
        </div>

        {/* Hint */}
        <p className="text-sm text-muted-foreground/70">{texts.hint}</p>
      </div>
    </main>
  )
}

interface NotFoundPageProps {
  texts: JoinTexts['notFound']
  homeHref: string
}

function NotFoundPage({ texts, homeHref }: NotFoundPageProps) {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-4 max-w-sm">
        <p className="text-6xl font-bold text-primary" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl font-semibold text-foreground">{texts.title}</h1>
        <p className="text-muted-foreground">{texts.description}</p>
        <Link
          href={homeHref}
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-medium text-sm h-10 px-5 transition-all duration-150 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {texts.home}
        </Link>
      </div>
    </main>
  )
}
