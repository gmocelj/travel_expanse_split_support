import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trevvy.app'),
  title: {
    default: 'Trevvy – Split Travel Expenses Effortlessly',
    template: '%s | Trevvy',
  },
  description: 'Track shared costs, settle balances, and enjoy your trip with friends. The simple, fast, and stress-free way to split travel expenses — no account required.',
  keywords: ['travel expense splitting', 'group trip app', 'split costs with friends', 'travel budget app', 'expense tracker', 'settle debts', 'trip expenses', 'iOS Android travel app'],
  authors: [{ name: 'Trevvy' }],
  creator: 'Trevvy',
  publisher: 'Trevvy',
  alternates: {
    canonical: 'https://trevvy.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trevvy.app',
    siteName: 'Trevvy',
    title: 'Trevvy – Split Travel Expenses Effortlessly',
    description: 'Track shared costs, settle balances, and enjoy your trip with friends. No account required.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trevvy – Split Travel Expenses Effortlessly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trevvy – Split Travel Expenses Effortlessly',
    description: 'Track shared costs, settle balances, and enjoy your trip with friends. No account required.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} dark`}>
      <head>
        {/* Security: Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
        />
        {/* Security: prevent clickjacking */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        {/* Security: prevent MIME sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
