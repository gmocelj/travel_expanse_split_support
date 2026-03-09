import Link from "next/link"
import Image from "next/image"
import { Apple } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/trevvy-app-icon.png" alt="Trevvy" width={32} height={32} className="rounded-lg ring-1 ring-primary/40" />
              <span className="text-xl font-semibold text-foreground">Trevvy</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The simple, fast, and stress-free way to split travel expenses with friends.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="https://apps.apple.com/us/app/trevvy/id6754640654" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                    <Apple className="h-3.5 w-3.5" />
                    App Store
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@trevvy.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Trevvy. All rights reserved.
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
