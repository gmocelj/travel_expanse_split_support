import { MapPin, UserPlus, Receipt, PieChart } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MapPin,
    title: "Create a trip",
    description: "Start by creating a new trip and give it a memorable name.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Add friends",
    description: "Invite your travel companions to join your trip group.",
  },
  {
    step: "03",
    icon: Receipt,
    title: "Record expenses",
    description: "Log expenses as they happen. Trevvy keeps track of everything.",
  },
  {
    step: "04",
    icon: PieChart,
    title: "Trevvy calculates",
    description: "Get instant balance updates and see who owes what.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Simple steps to stress-free expense splitting.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
