import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection, LegalText, SupportContact } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Trevvy collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://trevvy.app/privacy/",
  },
}

const strong = "text-foreground"

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="October 11, 2026">
      <LegalSection title="Overview">
        <LegalText>
          Trevvy helps you track and split travel expenses. This policy explains what Trevvy stores, where, why, and
          how you can delete it. In short: without an account everything stays on your phone; with an account your
          trips are also stored on our servers so you can back them up and share them.
        </LegalText>
      </LegalSection>

      <LegalSection title="Using Trevvy without an account">
        <LegalText>
          You can use Trevvy without signing in. Then all your data stays on your device and is never sent to us:
          trips, participants, expenses, settlements, categories, receipt photos and app preferences. Uninstalling
          the app deletes it.
        </LegalText>
      </LegalSection>

      <LegalSection title="Using Trevvy with an account">
        <LegalText>
          You can sign in with Apple, with Google, or with your email address. When you do, we store on our servers:
        </LegalText>
        <LegalList
          items={[
            <><strong className={strong}>Account details:</strong> your email address (with Sign in with Apple this can be a private relay address), the display name you choose, and an account identifier.</>,
            <><strong className={strong}>Your trips:</strong> trip names, currencies, dates and budgets; participants; expenses (amounts, categories, notes, who paid and how they are split); settlements; custom categories; and whether you archived a trip.</>,
            <><strong className={strong}>Sharing:</strong> which trips you are a member of, your role, and invitations you create.</>,
          ]}
        />
        <LegalText>
          We use this data to back up your trips, to restore them when you sign in on another phone, and to share
          trips with the people you invite. <strong className={strong}>Receipt photos are never uploaded</strong>; they
          stay on your device.
        </LegalText>
      </LegalSection>

      <LegalSection title="Who can see your data">
        <LegalList
          items={[
            "Your trips are visible only to you, unless you share them.",
            "When you share a trip, its members see that trip's data and your display name.",
            <>Members see your email address only if you turn on <strong className={strong}>Show my email to trip members</strong> in Settings. Apple private relay addresses are never shown.</>,
            "We do not sell your data and do not use it for advertising.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Service providers">
        <LegalText>We use these providers to run Trevvy. They process data only to provide their service:</LegalText>
        <LegalList
          items={[
            <><strong className={strong}>Supabase</strong> hosts our database and sign-in (account details and trips of signed-in users).</>,
            <><strong className={strong}>Apple</strong> (Sign in with Apple, App Store purchases) and <strong className={strong}>Google</strong> (Google Sign-In, Google Play purchases).</>,
            <><strong className={strong}>RevenueCat</strong> manages subscriptions and links purchases to your account identifier (<a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">privacy policy</a>).</>,
            <><strong className={strong}>ExchangeRate-API</strong> provides exchange rates; no personal data is sent to it.</>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Security">
        <LegalText>
          Data is encrypted in transit (HTTPS). Access on our servers is restricted by row-level rules, so every
          request can only read the trips of its own account or the trips shared with it.
        </LegalText>
      </LegalSection>

      <LegalSection title="Retention and deletion">
        <LegalText>
          We keep your account data as long as you have an account. You can delete your account at any time in the
          app (Settings → Account → Delete account) or by email; see{" "}
          <Link href="/delete-account" className="text-primary hover:underline">
            Delete your account
          </Link>{" "}
          for what is deleted and what is kept. Deletion takes effect immediately; copies in our hosting
          provider&apos;s backups expire within 30 days.
        </LegalText>
      </LegalSection>

      <LegalSection title="Your rights">
        <LegalText>
          You can see and change your data in the app, change your display name in Settings, and delete your account
          there. To request a copy of your data or ask a question about it, contact us. If you are in the EU or UK,
          you also have the right to complain to your data protection authority.
        </LegalText>
      </LegalSection>

      <LegalSection title="Advertising and tracking">
        <LegalText>
          Trevvy contains no advertising, no tracking and no analytics that collect personal data.
        </LegalText>
      </LegalSection>

      <LegalSection title="Children's privacy">
        <LegalText>Trevvy does not knowingly collect any information from children under 13 years of age.</LegalText>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <LegalText>
          We may update this policy from time to time. Changes are published on this page with a new date.
        </LegalText>
      </LegalSection>

      <LegalSection title="Contact us">
        <LegalText>If you have any questions about this policy, contact us at:</LegalText>
        <SupportContact />
      </LegalSection>
    </LegalPage>
  )
}
