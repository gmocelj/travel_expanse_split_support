import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection, LegalText, SupportContact } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to delete your Trevvy account and the data stored with it.",
  alternates: {
    canonical: "https://trevvy.app/delete-account/",
  },
}

export default function DeleteAccount() {
  return (
    <LegalPage eyebrow="Account" title="Delete your Trevvy account" updated="October 11, 2026">
      <LegalSection title="Delete it in the app">
        <LegalText>
          You can delete your account at any time from inside Trevvy, on iPhone and Android:
        </LegalText>
        <LegalList
          items={[
            "Open Trevvy and tap Settings.",
            <>In <strong className="text-foreground">Account</strong>, tap <strong className="text-foreground">Delete account</strong>.</>,
            "Read what will be deleted and confirm. If you signed in with Apple, confirm with your Apple ID once more.",
          ]}
        />
        <LegalText>The account is deleted immediately.</LegalText>
      </LegalSection>

      <LegalSection title="What is deleted">
        <LegalList
          items={[
            "Your account: email address, display name and account identifier.",
            "All trips you own that nobody else is in, with their participants, expenses, settlements and categories.",
            "Your memberships in trips shared with you, your invitations and your activity history.",
            "Everything Trevvy stored on the phone you delete the account from, including receipt photos.",
            "If you signed in with Apple, Trevvy's access to your Apple ID is revoked; with Google, Trevvy is disconnected from your Google account.",
          ]}
        />
      </LegalSection>

      <LegalSection title="What is kept">
        <LegalList
          items={[
            "Trips you shared with other people stay available to those people, read-only, so they keep their record of shared expenses. They are no longer linked to you.",
            "In trips other people own, the expenses you added stay part of their trip, under the participant name used in that trip, no longer linked to your account.",
            "Copies in our hosting provider's backups expire within 30 days.",
          ]}
        />
        <LegalText>
          Subscriptions are managed by the App Store or Google Play and are not cancelled by deleting your account.
          Cancel them in your App Store or Google Play subscription settings.
        </LegalText>
      </LegalSection>

      <LegalSection title="Without the app">
        <LegalText>
          If you no longer have the app, email us from the address of your account with the subject{" "}
          <strong className="text-foreground">Delete my account</strong>. If you used Sign in with Apple with
          {" “"}Hide My Email{"”"}, write from the email address of your Apple ID and tell us the name you used in
          Trevvy. We may ask you to confirm the request, and we delete the account within 30 days and confirm by email.
        </LegalText>
        <SupportContact />
      </LegalSection>

      <LegalSection title="More information">
        <LegalText>
          See our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          for what Trevvy stores and why.
        </LegalText>
      </LegalSection>
    </LegalPage>
  )
}
