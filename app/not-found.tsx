'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StoreButtons } from '@/components/store-buttons'
import { homePath, localeInfo, type Locale } from '@/lib/i18n/config'
import { joinTexts, pickJoinLocale, type JoinTexts } from '@/lib/i18n/join'

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

        <StoreButtons deepLink={deepLink} texts={texts} />

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
