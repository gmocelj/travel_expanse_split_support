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
  title: 'Trevvy - Split Travel Expenses Effortlessly',
  description: 'Track shared costs, settle balances, and enjoy your trip with friends. The simple, fast, and stress-free way to split travel expenses.',
  keywords: ['travel', 'expense splitting', 'group trips', 'travel app', 'split costs', 'friends'],
  authors: [{ name: 'Trevvy' }],
  openGraph: {
    title: 'Trevvy - Split Travel Expenses Effortlessly',
    description: 'Track shared costs, settle balances, and enjoy your trip with friends.',
    type: 'website',
  },
  icons: {
    icon: '/trevvy-app-icon.png',
    apple: '/trevvy-app-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} dark`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
