import Link from "next/link"
import Image from "next/image"
import { Apple } from "lucide-react"
import { homePath, localeInfo, locales, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

export function Footer({ locale, t, nav }: { locale: Locale; t: Dictionary["footer"]; nav: Dictionary["nav"] }) {
  const home = homePath(locale)

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href={home} className="flex items-center gap-2">
              <Image src="/trevvy-app-icon.png" alt="" width={32} height={32} className="rounded-lg ring-1 ring-primary/40" />
              <span className="text-xl font-semibold text-foreground">Trevvy</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">{t.product}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={`${home}#features`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {nav.features}
                  </Link>
                </li>
                <li>
                  <Link href={`${home}#how-it-works`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {nav.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link href="https://apps.apple.com/app/trevvy/id6754640654" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    <Apple className="h-3.5 w-3.5" />
                    App Store
                  </Link>
                </li>
                <li>
                  <Link href="https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
                    </svg>
                    Google Play
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">{t.support}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={`${home}#support`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.helpCenter}
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@trevvy.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.contact}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">{t.legal}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.deleteAccount}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">{t.languages}</h3>
              <ul className="space-y-3">
                {locales.map((l) => (
                  <li key={l}>
                    <Link
                      href={homePath(l)}
                      hrefLang={localeInfo[l].htmlLang}
                      lang={localeInfo[l].htmlLang}
                      aria-current={l === locale ? "true" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span aria-hidden="true" className="text-base leading-none">{localeInfo[l].flag}</span>
                      {localeInfo[l].nativeName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Trevvy. {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="mailto:support@trevvy.app" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              support@trevvy.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
