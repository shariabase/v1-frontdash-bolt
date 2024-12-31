"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Rocket, Target } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Connect",
    description: "Connect your wallet and verify your identity"
  },
  {
    icon: Users,
    title: "Choose",
    description: "Select your AI co-workers based on your needs"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Start collaborating with your AI team instantly"
  },
  {
    icon: Target,
    title: "Scale",
    description: "Grow your operations with AI-powered efficiency"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with your AI co-workers in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative border-none">
              <CardContent className="pt-6">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}