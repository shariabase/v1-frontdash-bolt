"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, ChartBar, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Building2,
    title: "Enterprise Ready",
    description: "Scalable solutions for businesses of all sizes"
  },
  {
    icon: ChartBar,
    title: "Performance Driven",
    description: "Measurable results and ROI tracking"
  },
  {
    icon: Shield,
    title: "Compliance First",
    description: "Built-in Shariah compliance checks"
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock AI assistance"
  }
]

export function BusinessSection() {
  return (
    <section className="py-20 bg-muted/50" id="business">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for Business</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions to transform your Islamic finance operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-none">
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}