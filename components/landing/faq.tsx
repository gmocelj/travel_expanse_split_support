"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Trevvy?",
    answer:
      "Trevvy is a travel expense splitting app for iOS. Create a trip, add friends, log shared expenses, and Trevvy calculates who owes what — with optimized settlement suggestions so everyone pays as few transfers as possible.",
  },
  {
    question: "Is Trevvy free?",
    answer:
      "Yes. Creating trips, adding participants, logging expenses, and viewing balances is completely free with up to 7 active trips. Premium unlocks QR/OCR receipt scanning, multi-currency support, analytics dashboard, and unlimited trips.",
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
      "Yes. With Premium you can log expenses in any currency. Trevvy fetches live exchange rates so all balances stay accurate regardless of which currencies were used. You can also set a base currency for each trip.",
  },
  {
    question: "Is my data stored online?",
    answer:
      "No. All trip data, expenses, and settings are stored locally on your device. Nothing is sent to external servers. To delete all data, simply uninstall the app.",
  },
  {
    question: "Do I need an account to use Trevvy?",
    answer:
      "No. Trevvy works without sign-up or login. Just download and start creating trips immediately.",
  },
  {
    question: "What is a Trip Pass?",
    answer:
      "A Trip Pass is a one-time purchase that unlocks all Premium features for a single trip for 17 days. It's ideal if you only need Premium for one trip without committing to a subscription.",
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

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to know about Trevvy.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
