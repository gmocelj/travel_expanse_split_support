// Single source for the FAQ section and its FAQPage structured data.

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: "What is Trevvy?",
    answer:
      "Trevvy is a travel expense splitting app for iOS and Android. Create a trip, add friends, log shared expenses, and Trevvy calculates who owes what — with optimized settlement suggestions so everyone pays as few transfers as possible.",
  },
  {
    question: "Is Trevvy free?",
    answer:
      "Yes. Creating trips, adding participants, logging expenses, and viewing balances is completely free with up to 7 active trips. Premium unlocks trip sharing, QR/OCR receipt scanning, live exchange rates, the analytics dashboard, and unlimited trips.",
  },
  {
    question: "Can I share a trip with friends?",
    answer:
      "Yes. Share a trip and send the invite link; friends who join can add and edit expenses with you, and everyone sees changes as they happen. Only the trip owner needs Premium — invited friends join for free.",
  },
  {
    question: "How does QR receipt scanning work?",
    answer:
      "Point your camera at a fiscal receipt QR code and Trevvy reads the total amount, currency, tax ID, and invoice number directly from the QR data. For most countries this works fully offline — no internet needed. The scanned data pre-fills the expense form so you can add it to your trip in seconds.",
  },
  {
    question: "Which countries are supported for QR scanning?",
    answer:
      "Trevvy supports official fiscal receipt QR codes from 27 countries: Argentina, Austria, Bolivia, Brazil, China, Colombia, Croatia, Czech Republic, Ecuador, Egypt, Hungary, India, Italy, Kenya, South Korea, Mexico, Portugal, Romania, Russia, Saudi Arabia, Serbia, Slovakia, Slovenia, Spain, Taiwan, Thailand, and Ukraine. It also handles generic JSON, key-value, and URL-based receipt formats from any country.",
  },
  {
    question: "Does Trevvy support multiple currencies?",
    answer:
      "Yes. You can log each expense in any currency and enter the exchange rate yourself; each trip has its own base currency. Premium fetches live exchange rates automatically.",
  },
  {
    question: "Do I need an account to use Trevvy?",
    answer:
      "No. Trevvy works without sign-up — just download it and start creating trips. Sign in with Apple, Google, or your email only if you want to back up your trips or share them with friends.",
  },
  {
    question: "Is my data stored online?",
    answer:
      "Only if you sign in. Without an account everything stays on your device. With an account, your trips are also stored on our servers so they are backed up and can be shared; receipt photos always stay on your device. See the Privacy Policy for details.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "In the app, go to Settings → Account → Delete account. Your account and the trips stored with it are deleted; trips you shared stay with their members, read-only. You can also request deletion at trevvy.app/delete-account.",
  },
  {
    question: "What is a Trip Pass?",
    answer:
      "A Trip Pass is a one-time purchase that unlocks Premium features for a single trip for 17 days — receipt scanning, live exchange rates and analytics. It's ideal if you only need Premium for one trip without committing to a subscription. Sharing trips needs a subscription.",
  },
  {
    question: "How are settlements optimized?",
    answer:
      "Trevvy uses a debt simplification algorithm that minimizes the number of payments needed to settle all balances. Instead of everyone paying everyone else, Trevvy finds the fewest possible transfers to get everyone to zero.",
  },
  {
    question: "Can I export my trip data?",
    answer:
      "Yes. You can share a summary of your trip expenses and balances directly from the app.",
  },
]
