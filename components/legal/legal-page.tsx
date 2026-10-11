import type { ReactNode } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

/** Shared layout of the legal pages (privacy policy, account deletion). */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{eyebrow}</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {title}
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: {updated}</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/** A titled section of a legal page. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

/** A paragraph of a legal page. */
export function LegalText({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed">{children}</p>
}

/** A bullet list of a legal page. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** The support contact box. */
export function SupportContact() {
  return (
    <div className="p-6 bg-muted rounded-2xl">
      <p className="font-medium text-foreground">Trevvy Support</p>
      <a href="mailto:support@trevvy.app" className="text-primary hover:underline">
        support@trevvy.app
      </a>
    </div>
  )
}
