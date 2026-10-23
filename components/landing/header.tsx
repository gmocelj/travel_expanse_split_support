"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Menu, X } from "lucide-react"
import { homePath, localeInfo, locales, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

const APP_STORE_URL = "https://apps.apple.com/app/trevvy/id6754640654"
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split"

const linkClass = "whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"

export function Header({ locale, t }: { locale: Locale; t: Dictionary["nav"] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const home = homePath(locale)
  const navLinks = [
    { href: `${home}#features`, label: t.features },
    { href: `${home}#how-it-works`, label: t.howItWorks },
    { href: `${home}#faq`, label: t.faq },
    { href: `${home}#support`, label: t.support },
    { href: "/privacy/", label: t.privacy },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href={home} className="flex items-center gap-2">
          <Image src="/trevvy-app-icon.png" alt="" width={32} height={32} className="rounded-lg ring-1 ring-primary/40" />
          <span className="text-xl font-semibold text-foreground">Trevvy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <LanguageMenu locale={locale} label={t.language} />
          <Button asChild variant="outline" size="sm" className="rounded-full px-4 hover:shadow-md transition-all">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App Store
            </Link>
          </Button>
          <Button asChild size="sm" className="rounded-full px-4 hover:shadow-md hover:shadow-primary/30 transition-all">
            <Link href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
              Google Play
            </Link>
          </Button>
        </div>

        {/* Mobile: language + menu button */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageMenu locale={locale} label={t.language} />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.toggleMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="rounded-full w-full mt-2">
              <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                App Store
              </Link>
            </Button>
            <Button asChild className="rounded-full w-full">
              <Link href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                Google Play
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function LanguageMenu({ locale, label }: { locale: Locale; label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full gap-1.5 px-3" aria-label={label}>
          <Globe className="h-4 w-4" />
          <span className="uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link href={homePath(l)} hrefLang={localeInfo[l].htmlLang} lang={localeInfo[l].htmlLang} aria-current={l === locale ? "true" : undefined}>
              {localeInfo[l].nativeName}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
