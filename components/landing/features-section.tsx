"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Users, Shield, Database } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "On Demand",
    description: "Access AI expertise whenever you need it, 24/7"
  },
  {
    icon: Shield,
    title: "Sharia AI",
    description: "Built on Islamic principles and compliant with Shariah law"
  },
  {
    icon: Users,
    title: "AI Co-Workers",
    description: "Collaborate with AI agents trained in Islamic finance"
  },
  {
    icon: Database,
    title: "Community-Owned",
    description: "Decentralized platform owned by the community"
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "Transparent and responsible AI development"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            The World's Smartest Shariah AI Workforce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of attributes to create your next Sharia
            Compliant product with our ethical AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none">
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}