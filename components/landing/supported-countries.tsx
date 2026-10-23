import type { CountryKey, Dictionary } from "@/lib/i18n/types"

// Standard names stay in their original form; country names come from the dictionary.
const countries: { flag: string; code: CountryKey; standard: string }[] = [
  { flag: "🇦🇷", code: "AR", standard: "AFIP electronic invoice" },
  { flag: "🇦🇹", code: "AT", standard: "RKSV fiscal receipt" },
  { flag: "🇧🇴", code: "BO", standard: "SIN / SIAT fiscal receipt" },
  { flag: "🇧🇷", code: "BR", standard: "NFC-e electronic receipt" },
  { flag: "🇨🇳", code: "CN", standard: "Fapiao electronic invoice" },
  { flag: "🇨🇴", code: "CO", standard: "DIAN e-invoice" },
  { flag: "🇭🇷", code: "HR", standard: "Fiskalizacija fiscal receipt" },
  { flag: "🇨🇿", code: "CZ", standard: "EET fiscal receipt" },
  { flag: "🇪🇨", code: "EC", standard: "SRI electronic invoice" },
  { flag: "🇪🇬", code: "EG", standard: "ETA e-Receipt" },
  { flag: "🇭🇺", code: "HU", standard: "NAV online invoice" },
  { flag: "🇮🇳", code: "IN", standard: "GST invoice QR code" },
  { flag: "🇮🇹", code: "IT", standard: "Lotteria degli Scontrini" },
  { flag: "🇰🇪", code: "KE", standard: "KRA eTIMS fiscal receipt" },
  { flag: "🇰🇷", code: "KR", standard: "Cash receipt" },
  { flag: "🇲🇽", code: "MX", standard: "SAT CFDI electronic invoice" },
  { flag: "🇵🇹", code: "PT", standard: "AT invoice QR code" },
  { flag: "🇷🇴", code: "RO", standard: "e-Factura ANAF" },
  { flag: "🇷🇺", code: "RU", standard: "OFD fiscal receipt" },
  { flag: "🇸🇦", code: "SA", standard: "ZATCA / Fatoora e-invoice" },
  { flag: "🇷🇸", code: "RS", standard: "PURS fiscal receipt" },
  { flag: "🇸🇰", code: "SK", standard: "eKasa fiscal receipt" },
  { flag: "🇸🇮", code: "SI", standard: "FURS fiscal receipt" },
  { flag: "🇪🇸", code: "ES", standard: "TicketBAI / Verifactu" },
  { flag: "🇹🇼", code: "TW", standard: "Cloud invoice" },
  { flag: "🇹🇭", code: "TH", standard: "e-Tax Invoice" },
  { flag: "🇺🇦", code: "UA", standard: "PRRO fiscal receipt" },
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
