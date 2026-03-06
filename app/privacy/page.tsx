import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Trevvy",
  description: "Learn how Trevvy collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: March 5, 2026
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trevvy is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trevvy does <strong className="text-foreground">not</strong> collect, store, or transmit any personal data to external servers. All trip data, expenses, and settings are stored locally on your device.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Data Is Stored Locally</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The following data is stored only on your device:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Trip names and details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Participant names</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Expense records (amounts, categories, splits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Settlement records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>App preferences (theme, date format)</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This data never leaves your device and is not accessible to us or any third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">RevenueCat</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use RevenueCat to manage in-app subscriptions. RevenueCat may collect anonymous purchase data and device identifiers as described in their{" "}
                      <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">privacy policy</a>.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Apple App Store</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Subscription purchases are processed by Apple. {"Apple's"} privacy policy applies to all transactions made through the App Store.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Deletion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All data stored by the app is kept locally on your device. To permanently delete all your data, simply uninstall the app. No data is held on external servers, so no additional deletion steps are required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Advertising and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trevvy does not use any advertising SDKs, tracking frameworks, or analytics services that collect personal data. No user behaviour is tracked or shared with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Exchange Rates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When using the multi-currency feature, the app may fetch exchange rates from an external API. No personal data is sent in these requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{"Children's"} Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trevvy does not knowingly collect any information from children under 13 years of age.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-muted rounded-2xl">
                  <p className="font-medium text-foreground">Trevvy Support</p>
                  <a href="mailto:support@trevvy.app" className="text-primary hover:underline">
                    support@trevvy.app
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
