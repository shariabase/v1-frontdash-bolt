"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Scale, FileCheck, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Research Assistant",
    description: "AI-powered research and analysis of Islamic texts"
  },
  {
    icon: Scale,
    title: "Fatwa Analysis",
    description: "Compare and analyze fatwas across different schools"
  },
  {
    icon: FileCheck,
    title: "Document Review",
    description: "Automated Shariah compliance document review"
  },
  {
    icon: Users,
    title: "Scholar Network",
    description: "Connect with scholars worldwide"
  }
]

export function ScholarSection() {
  return (
    <section className="py-20" id="scholar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">For Islamic Scholars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your research and analysis with AI-powered tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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