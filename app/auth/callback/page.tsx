import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Finish signing in",
  robots: { index: false, follow: false },
}

// Sign-in emails link here. With Trevvy installed the link opens the app;
// this page is shown only when it is opened elsewhere (e.g. on a computer).
export default function AuthCallback() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-sm w-full gap-6">
        <Image
          src="/trevvy-app-icon.png"
          alt="Trevvy"
          width={80}
          height={80}
          className="rounded-[28%] shadow-lg"
          priority
        />
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Finish signing in on your phone</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Open the sign-in email on the phone where you use Trevvy and tap the link there. The link opens the app
          and signs you in.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Make sure you have the latest version of Trevvy installed.
        </p>
      </div>
    </main>
  )
}
