import { Calculator, Users, ArrowRightLeft, ScanLine, BarChart2, Globe } from "lucide-react"

const features = [
  {
    icon: Calculator,
    title: "Split expenses easily",
    description: "Add shared costs and Trevvy automatically calculates who owes what. No more manual math.",
  },
  {
    icon: Users,
    title: "Perfect for group trips",
    description: "Track accommodation, food, transport, and activities all in one place.",
  },
  {
    icon: ArrowRightLeft,
    title: "Optimized settlements",
    description: "See exactly who needs to pay whom with clear, minimized payment suggestions.",
  },
  {
    icon: ScanLine,
    title: "QR & OCR receipt scanning",
    description: "Scan receipts with your camera or QR code — Trevvy reads the total for you automatically.",
  },
  {
    icon: Globe,
    title: "Multi-currency support",
    description: "Travel abroad without worry. Live exchange rates keep all amounts accurate in any currency.",
  },
  {
    icon: BarChart2,
    title: "Analytics dashboard",
    description: "See spending breakdowns by category, person, and day to understand where your money went.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to split expenses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Focus on enjoying your trip while Trevvy handles the money math. QR/OCR scanning, multi-currency, and analytics require Premium.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
