"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins, Lock, Users, Rocket } from "lucide-react"

const tokenomics = [
  {
    title: "Community Pool",
    percentage: 40,
    description: "Reserved for community rewards and governance",
    icon: Users
  },
  {
    title: "Development",
    percentage: 30,
    description: "Platform development and maintenance",
    icon: Rocket
  },
  {
    title: "Team & Advisors",
    percentage: 20,
    description: "Team allocation with vesting schedule",
    icon: Lock
  },
  {
    title: "Liquidity",
    percentage: 10,
    description: "Initial liquidity provision",
    icon: Coins
  }
]

export function TokenomicsSection() {
  return (
    <section className="py-20 bg-muted/50" id="tokenomics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fair and transparent token distribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tokenomics.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Allocation</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}