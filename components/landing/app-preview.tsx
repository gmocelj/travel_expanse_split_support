import Image from "next/image"
import type { Dictionary, ScreenKey } from "@/lib/i18n/types"

const screens: { key: ScreenKey; src: string }[] = [
  { key: "travels", src: "/screenshots/travels-list.webp" },
  { key: "expenses", src: "/screenshots/expenses-list.webp" },
  { key: "analytics", src: "/screenshots/analytics-chart.png" },
  { key: "settlement", src: "/screenshots/settlement-payments.webp" },
]

export function AppPreview({ t }: { t: Dictionary["preview"] }) {
  return (
    <section className="py-24 lg:py-32 bg-card">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screens.map((screen) => (
            <div key={screen.key} className="group flex flex-col items-center">
              <div className="relative w-full drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={screen.src}
                  alt={t.screens[screen.key].alt}
                  width={390}
                  height={844}
                  className="rounded-[2rem] w-full ring-2 ring-primary/40"
                />
              </div>
              <p className="mt-5 text-sm font-semibold text-foreground">{t.screens[screen.key].title}</p>
              <p className="mt-1 text-xs text-muted-foreground text-center text-pretty">{t.screens[screen.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
