"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now available on the App Store
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Split travel expenses{" "}
            <span className="text-primary">effortlessly</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            Track shared costs, settle balances, and enjoy your trip with friends. 
            The simple, fast, and stress-free way to manage group expenses.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" />
                Download on App Store
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-medium">
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>

        {/* App Mockup */}
        <div className="mt-16 lg:mt-24 relative">
          <div className="mx-auto max-w-sm lg:max-w-md">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-card px-6 pt-3 pb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-foreground/80 rounded-sm" />
                      <div className="w-4 h-2 bg-foreground/80 rounded-sm" />
                      <div className="w-6 h-3 bg-foreground/80 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App Content Preview */}
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground">Summer Road Trip</h3>
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">Active</span>
                    </div>
                    
                    {/* Balance Cards */}
                    <div className="space-y-3">
                      <div className="bg-muted rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-sm font-medium text-primary">JD</span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">John</p>
                              <p className="text-xs text-muted-foreground">owes you</p>
                            </div>
                          </div>
                          <span className="text-base font-semibold text-emerald-600">+$45.50</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-sm font-medium text-accent">SM</span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">Sarah</p>
                              <p className="text-xs text-muted-foreground">you owe</p>
                            </div>
                          </div>
                          <span className="text-base font-semibold text-rose-600">-$22.00</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-chart-4/20 flex items-center justify-center">
                              <span className="text-sm font-medium text-chart-4">MK</span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">Mike</p>
                              <p className="text-xs text-muted-foreground">settled</p>
                            </div>
                          </div>
                          <span className="text-base font-semibold text-muted-foreground">$0.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="mt-6 bg-primary rounded-2xl p-4 text-center">
                      <p className="text-sm text-primary-foreground/80">Your total balance</p>
                      <p className="text-2xl font-bold text-primary-foreground">+$23.50</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-8 top-1/4 h-20 w-20 rounded-2xl bg-primary/20 rotate-12 blur-sm hidden lg:block" />
              <div className="absolute -left-12 bottom-1/3 h-16 w-16 rounded-full bg-accent/20 blur-sm hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
