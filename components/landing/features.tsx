import { Calculator, Users, ArrowRightLeft, ScanLine, BarChart2, Globe, Share2, CloudUpload, type LucideIcon } from "lucide-react"
import type { Dictionary, FeatureKey } from "@/lib/i18n/types"

const features: { key: FeatureKey; icon: LucideIcon }[] = [
  { key: "split", icon: Calculator },
  { key: "groups", icon: Users },
  { key: "share", icon: Share2 },
  { key: "backup", icon: CloudUpload },
  { key: "settle", icon: ArrowRightLeft },
  { key: "scan", icon: ScanLine },
  { key: "currency", icon: Globe },
  { key: "analytics", icon: BarChart2 },
]

export function Features({ t }: { t: Dictionary["features"] }) {
  return (
    <section id="features" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t.items[feature.key].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.items[feature.key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
