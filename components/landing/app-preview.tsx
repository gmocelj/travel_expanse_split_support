import Image from "next/image"

const screens = [
  {
    src: "/screenshots/travels-list.png",
    alt: "Travels list – manage your trips",
    label: "Your Travels",
    description: "Create trips, set budgets, and track spending across all your travels in one place.",
  },
  {
    src: "/screenshots/expenses-list.png",
    alt: "Expenses list with categories",
    label: "Track Expenses",
    description: "Log every expense with a category, see who paid, and which participants are split in.",
  },
  {
    src: "/screenshots/analytics-chart.png",
    alt: "Analytics – spending by category donut chart",
    label: "Spending Analytics",
    description: "Visualise spending by category with charts. See budget vs. actual at a glance.",
  },
  {
    src: "/screenshots/settlement-payments.png",
    alt: "Settlement – recorded payments",
    label: "Easy Settlement",
    description: "See outstanding debts, record payments, and mark them completed when settled.",
  },
]

export function AppPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">App Preview</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Beautiful, intuitive design
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Designed for real travel situations with a focus on speed and clarity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screens.map((screen) => (
            <div key={screen.label} className="group flex flex-col items-center">
              <div className="relative w-full drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={390}
                  height={844}
                  className="rounded-[2rem] w-full ring-2 ring-primary/40"
                />
              </div>
              <p className="mt-5 text-sm font-semibold text-foreground">{screen.label}</p>
              <p className="mt-1 text-xs text-muted-foreground text-center text-pretty">{screen.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
