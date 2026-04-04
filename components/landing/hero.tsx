"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function Hero() {
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
            Now available on App Store &amp; Google Play
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Split travel expenses{" "}
            <span className="text-primary">effortlessly</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            Track shared costs, settle balances, and enjoy your trip.
            Add participants, log expenses by category, and see who owes what — all stored privately on your device.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="https://apps.apple.com/app/trevvy/id6754640654" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" />
                Download on App Store
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l.1-.03 10.7-10.7-2.18-2.18L3.18 23.76zM20.7 10.02l-2.6-1.48-2.45 2.45 2.45 2.45 2.62-1.49c.75-.43.75-1.5-.02-1.93zM3.01.48C2.7.67 2.5 1 2.5 1.42v21.16c0 .42.2.75.51.94l.1.05L14.4 12.7v-.27L3.01.48zM14.4 11.27L4.07.29l.1.06 10.23 10.92z"/>
                </svg>
                Get it on Google Play
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-medium">
              <Link href="/#how-it-works">
                See How It Works
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
                alt="Trevvy app – Expenses screen"
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
