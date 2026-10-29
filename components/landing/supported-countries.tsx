import type { CountryKey, Dictionary } from "@/lib/i18n/types"

// Standard names stay in their original form; country names come from the dictionary.
const countries: { flag: string; code: CountryKey; standard: string }[] = [
  { flag: "🇭🇷", code: "HR", standard: "Fiskalizacija fiscal receipt" },
  { flag: "🇷🇸", code: "RS", standard: "PURS fiscal receipt" },
]

export function SupportedCountries({ t }: { t: Dictionary["countries"] }) {
  return (
    <section id="supported-countries" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex items-center gap-3 rounded-2xl bg-background border border-border px-5 py-3"
            >
              <span className="text-2xl">{country.flag}</span>
              <div className="min-w-0">
                <p className="font-medium text-foreground text-sm truncate">
                  {t.names[country.code]}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {country.standard}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t.footnote}
        </p>
      </div>
    </section>
  )
}
