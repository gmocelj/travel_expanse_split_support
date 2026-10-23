import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/types"

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            {t.titleStart}{" "}
            <span className="text-primary">{t.titleHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="https://apps.apple.com/app/trevvy/id6754640654" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" />
                {t.appStore}
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
                </svg>
                {t.googlePlay}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-medium">
              <Link href="#how-it-works">
                {t.howItWorks}
              </Link>
            </Button>
          </div>
        </div>

        {/* App Screenshot */}
        <div className="mt-16 lg:mt-24 relative">
          <div className="mx-auto max-w-xs">
            <div className="relative drop-shadow-2xl">
              <Image
                src="/screenshots/expenses-list.webp"
                alt={t.screenshotAlt}
                width={390}
                height={844}
                className="rounded-[3rem] w-full ring-2 ring-primary/40"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
