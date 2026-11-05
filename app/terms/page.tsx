import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection, LegalText, SupportContact } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using Trevvy, including Premium subscriptions and Trip Passes.",
  alternates: {
    canonical: "https://trevvy.app/terms/",
  },
}

const strong = "text-foreground"
const linkClass = "text-primary hover:underline"

export default function TermsOfUse() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" updated="November 5, 2026">
      <LegalSection title="Who we are">
        <LegalText>
          Trevvy is offered by Goran Mocelj, an individual developer based in Novi Sad, Serbia. By using the Trevvy
          app or this website you agree to these terms. If you do not agree, please do not use Trevvy.
        </LegalText>
      </LegalSection>

      <LegalSection title="What Trevvy does">
        <LegalText>
          Trevvy helps you track and split travel expenses. You can use it without an account, and then your data
          stays on your device. You can also sign in with Apple, Google or your email address. Then your trips are
          stored on our servers so you can back them up and share them. See our{" "}
          <Link href="/privacy/" className={linkClass}>Privacy Policy</Link> for details.
        </LegalText>
        <LegalText>
          You can share a trip by inviting other people. The person who owns the trip decides who is invited, and a
          member&apos;s role may be view-only.
        </LegalText>
      </LegalSection>

      <LegalSection title="Free plan and Premium">
        <LegalText>
          The free plan has limits. For example, you can have up to 7 active trips. Receipt scanning, the trip
          dashboard and live exchange rates need Premium or a Trip Pass for that trip. Sharing trips and inviting
          members need Premium. The current limits and features are shown in the app.
        </LegalText>
      </LegalSection>

      <LegalSection title="Premium subscription">
        <LegalList
          items={[
            "Premium is a monthly or annual subscription. The price is shown in the app and in the store before you buy.",
            "You pay through your App Store or Google Play account.",
            <><strong className={strong}>The subscription renews automatically</strong> for the same period and price unless you cancel at least 24 hours before the current period ends.</>,
            "You can manage or cancel it at any time in your App Store or Google Play subscription settings. Deleting the app does not cancel it.",
            "When you are signed in, Premium follows your Trevvy account. Use Restore Purchases in the app if Premium does not appear on a new device.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Trip Pass">
        <LegalList
          items={[
            "A Trip Pass is a one-time purchase. It unlocks Premium features for one trip. It does not renew.",
            <>Once you assign a Trip Pass to a trip, <strong className={strong}>it cannot be moved to another trip</strong>.</>,
            "A Trip Pass you have not assigned yet stays available on the trip list of your device until you assign it.",
            "If you have a Premium subscription, you do not need a Trip Pass.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Refunds">
        <LegalText>
          Purchases are processed by Apple or Google, so refunds are handled by them under their own policies. If
          you are a consumer in the EU, you keep your statutory rights. Nothing in these terms limits rights that
          cannot be excluded by law.
        </LegalText>
      </LegalSection>

      <LegalSection title="Your content">
        <LegalText>
          You are responsible for what you enter in Trevvy. This includes information about other people that you
          add as participants, and the people you invite to a trip. Please add only information you are allowed to
          share. Receipt photos stay on your device.
        </LegalText>
      </LegalSection>

      <LegalSection title="Calculations and scanning">
        <LegalText>
          Balances, settlements, currency conversion and receipt scanning are aids. Exchange rates come from a
          third-party provider and may be delayed or approximate. Receipt scanning (QR codes and on-device text
          recognition) may misread a receipt. Always check the amounts before you pay anyone.
        </LegalText>
        <LegalText>
          Trevvy does not move money between people. It is not a payment, accounting or tax service.
        </LegalText>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <LegalText>You agree not to:</LegalText>
        <LegalList
          items={[
            "use Trevvy for anything unlawful;",
            "abuse invitations or sharing, for example by sending unwanted invitations;",
            "try to access data of other accounts;",
            "disrupt or attack the service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Deleting your account">
        <LegalText>
          You can delete your account at any time in the app (Settings → Account → Delete account). See{" "}
          <Link href="/delete-account/" className={linkClass}>Delete your account</Link> for what is deleted and what
          is kept, and the{" "}
          <Link href="/privacy/" className={linkClass}>Privacy Policy</Link> for how we handle your data.
        </LegalText>
      </LegalSection>

      <LegalSection title="Availability and disclaimer">
        <LegalText>
          We work to keep Trevvy running, but we do not promise that it will always be available or free of errors.
          Trevvy is provided &ldquo;as is&rdquo;. We may change or stop features. Keep your own records of anything
          important.
        </LegalText>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <LegalText>
          To the extent permitted by law, we are not liable for indirect or consequential loss, or for loss of data
          or money caused by using Trevvy, including wrong calculations or settlements you make based on them. This
          does not limit any liability that cannot be excluded by law.
        </LegalText>
      </LegalSection>

      <LegalSection title="Apple">
        <LegalText>
          If you use Trevvy on iOS, these terms apply alongside Apple&apos;s{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Licensed Application End User License Agreement
          </a>
          . Apple is not responsible for Trevvy or for support of it.
        </LegalText>
      </LegalSection>

      <LegalSection title="Governing law">
        <LegalText>
          These terms are governed by the law of Serbia. If you are a consumer, this does not take away the
          mandatory consumer protection of the law of the country where you live.
        </LegalText>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <LegalText>
          We may update these terms from time to time. Changes are published on this page with a new date.
        </LegalText>
      </LegalSection>

      <LegalSection title="Contact us">
        <LegalText>If you have any questions about these terms, contact us at:</LegalText>
        <SupportContact />
      </LegalSection>
    </LegalPage>
  )
}
