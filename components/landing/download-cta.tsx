import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function DownloadCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-foreground overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-background" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl text-balance">
              Start your next trip without money stress
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto text-pretty">
              Download Trevvy today and focus on making memories, not managing spreadsheets.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base font-medium bg-background text-foreground hover:bg-background/90">
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Apple className="mr-2 h-5 w-5" />
                  Download on App Store
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-background/50">
              Free to download • No account required to start
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
