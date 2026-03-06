export function AppPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">App Preview</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Beautiful, intuitive design
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Designed for real travel situations with a focus on speed and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Screen 1: Trip Overview */}
          <div className="group">
            <div className="relative mx-auto max-w-xs">
              <div className="bg-foreground rounded-[2.5rem] p-2.5 shadow-2xl group-hover:shadow-3xl transition-shadow">
                <div className="bg-card rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-card px-5 pt-2 pb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-5 h-2 bg-foreground/80 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-4 py-3">
                    <h4 className="text-base font-semibold text-foreground mb-4">My Trips</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-primary/5 rounded-xl p-3 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-lg">
                            🏖️
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">Beach Vacation</p>
                            <p className="text-xs text-muted-foreground">4 friends • Active</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-muted-foreground/10 flex items-center justify-center text-lg">
                            🗻
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">Ski Trip 2024</p>
                            <p className="text-xs text-muted-foreground">6 friends • Completed</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-muted-foreground/10 flex items-center justify-center text-lg">
                            🏕️
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">Camping Weekend</p>
                            <p className="text-xs text-muted-foreground">3 friends • Completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-primary text-primary-foreground rounded-xl py-3 text-sm font-medium">
                      + New Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-muted-foreground">Trip Overview</p>
          </div>

          {/* Screen 2: Add Expense */}
          <div className="group">
            <div className="relative mx-auto max-w-xs">
              <div className="bg-foreground rounded-[2.5rem] p-2.5 shadow-2xl group-hover:shadow-3xl transition-shadow">
                <div className="bg-card rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-card px-5 pt-2 pb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-5 h-2 bg-foreground/80 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-4 py-3">
                    <h4 className="text-base font-semibold text-foreground mb-4">Add Expense</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Amount</label>
                        <div className="bg-muted rounded-xl p-3 flex items-center">
                          <span className="text-2xl font-bold text-foreground">$</span>
                          <span className="text-2xl font-bold text-foreground ml-1">87.50</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Description</label>
                        <div className="bg-muted rounded-xl p-3">
                          <span className="text-sm text-foreground">Dinner at seaside</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Category</label>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium">🍔 Food</span>
                          <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-xs">🚗 Transport</span>
                          <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-xs">🏨 Stay</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">Split between</label>
                        <div className="flex gap-2">
                          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">You</span>
                          </div>
                          <div className="h-9 w-9 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-accent">JD</span>
                          </div>
                          <div className="h-9 w-9 rounded-full bg-chart-4/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-chart-4">SM</span>
                          </div>
                          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">+2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-primary text-primary-foreground rounded-xl py-3 text-sm font-medium">
                      Save Expense
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-muted-foreground">Expense Entry</p>
          </div>

          {/* Screen 3: Balance Summary */}
          <div className="group">
            <div className="relative mx-auto max-w-xs">
              <div className="bg-foreground rounded-[2.5rem] p-2.5 shadow-2xl group-hover:shadow-3xl transition-shadow">
                <div className="bg-card rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-card px-5 pt-2 pb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-3 h-1.5 bg-foreground/80 rounded-sm" />
                      <div className="w-5 h-2 bg-foreground/80 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-4 py-3">
                    <h4 className="text-base font-semibold text-foreground mb-4">Settlement</h4>
                    
                    <div className="bg-primary/10 rounded-2xl p-4 mb-4 text-center">
                      <p className="text-xs text-primary mb-1">Optimal Payments</p>
                      <p className="text-xl font-bold text-foreground">3 transfers</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">JD</span>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">pays</span>
                            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-accent">SM</span>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-foreground">$45.50</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-chart-4/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-chart-4">MK</span>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">pays</span>
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">You</span>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-foreground">$32.00</span>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-accent">AL</span>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">pays</span>
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">You</span>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-foreground">$18.25</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-primary text-primary-foreground rounded-xl py-3 text-sm font-medium">
                      Mark All Settled
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-muted-foreground">Balance Summary</p>
          </div>
        </div>
      </div>
    </section>
  )
}
