import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function DownloadCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-card border border-border overflow-hidden">
          {/* Subtle gold glow */}
          <div className="absolute inset-0 -z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Start your next trip without money stress
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Download Trevvy today and focus on making memories, not managing spreadsheets.
            </p>
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
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free to download • No account required to start
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
