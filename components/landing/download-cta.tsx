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
            <div className="mt-10 flex items-center justify-center">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Apple className="mr-2 h-5 w-5" />
                  Download on App Store
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
