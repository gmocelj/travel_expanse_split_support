const countries = [
  { flag: "🇦🇷", name: "Argentina", standard: "AFIP electronic invoice" },
  { flag: "🇦🇹", name: "Austria", standard: "RKSV fiscal receipt" },
  { flag: "🇧🇴", name: "Bolivia", standard: "SIN / SIAT fiscal receipt" },
  { flag: "🇧🇷", name: "Brazil", standard: "NFC-e electronic receipt" },
  { flag: "🇨🇳", name: "China", standard: "Fapiao electronic invoice" },
  { flag: "🇨🇴", name: "Colombia", standard: "DIAN e-invoice" },
  { flag: "🇭🇷", name: "Croatia", standard: "Fiskalizacija fiscal receipt" },
  { flag: "🇨🇿", name: "Czech Republic", standard: "EET fiscal receipt" },
  { flag: "🇪🇨", name: "Ecuador", standard: "SRI electronic invoice" },
  { flag: "🇪🇬", name: "Egypt", standard: "ETA e-Receipt" },
  { flag: "🇭🇺", name: "Hungary", standard: "NAV online invoice" },
  { flag: "🇮🇳", name: "India", standard: "GST invoice QR code" },
  { flag: "🇮🇹", name: "Italy", standard: "Lotteria degli Scontrini" },
  { flag: "🇰🇪", name: "Kenya", standard: "KRA eTIMS fiscal receipt" },
  { flag: "🇰🇷", name: "South Korea", standard: "Cash receipt" },
  { flag: "🇲🇽", name: "Mexico", standard: "SAT CFDI electronic invoice" },
  { flag: "🇵🇹", name: "Portugal", standard: "AT invoice QR code" },
  { flag: "🇷🇴", name: "Romania", standard: "e-Factura ANAF" },
  { flag: "🇷🇺", name: "Russia", standard: "OFD fiscal receipt" },
  { flag: "🇸🇦", name: "Saudi Arabia", standard: "ZATCA / Fatoora e-invoice" },
  { flag: "🇷🇸", name: "Serbia", standard: "PURS fiscal receipt" },
  { flag: "🇸🇰", name: "Slovakia", standard: "eKasa fiscal receipt" },
  { flag: "🇸🇮", name: "Slovenia", standard: "FURS fiscal receipt" },
  { flag: "🇪🇸", name: "Spain", standard: "TicketBAI / Verifactu" },
  { flag: "🇹🇼", name: "Taiwan", standard: "Cloud invoice" },
  { flag: "🇹🇭", name: "Thailand", standard: "e-Tax Invoice" },
  { flag: "🇺🇦", name: "Ukraine", standard: "PRRO fiscal receipt" },
]

export function SupportedCountries() {
  return (
    <section id="supported-countries" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            QR Receipt Scanning
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            27 countries supported
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Trevvy natively reads official fiscal receipt QR codes. Just scan and the amount, currency, and tax details are filled in automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {countries.map((country) => (
            <div
              key={country.name}
              className="flex items-center gap-3 rounded-2xl bg-background border border-border px-5 py-3"
            >
              <span className="text-2xl">{country.flag}</span>
              <div className="min-w-0">
                <p className="font-medium text-foreground text-sm truncate">
                  {country.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {country.standard}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Plus generic support for any JSON, key-value, or URL-based receipt format.
        </p>
      </div>
    </section>
  )
}
