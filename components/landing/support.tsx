import { Mail, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export function Support() {
  return (
    <section id="support" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Support</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            We're here to help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            If you experience issues or have questions about Trevvy, please contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {/* Email Support */}
          <div className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center">
            <div className="mb-5 mx-auto inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Email Support
            </h3>
            <p className="text-muted-foreground mb-4">
              Get help via email.
            </p>
            <a 
              href="mailto:support@trevvy.app" 
              className="text-primary font-medium hover:underline"
            >
              support@trevvy.app
            </a>
          </div>

          {/* FAQ */}
          <div className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center">
            <div className="mb-5 mx-auto inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              In-App Support
            </h3>
            <p className="text-muted-foreground mb-4">
              Access help directly from the app.
            </p>
            <span className="text-muted-foreground text-sm">
              Settings → Help & Support
            </span>
          </div>

          {/* Privacy Policy */}
          <div className="group relative bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
            <div className="mb-5 mx-auto inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/15 transition-colors">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Privacy Policy
            </h3>
            <p className="text-muted-foreground mb-4">
              Learn how we protect your data.
            </p>
            <Link 
              href="/privacy" 
              className="text-primary font-medium hover:underline"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
