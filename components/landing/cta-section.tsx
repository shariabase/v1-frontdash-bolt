"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Streamline Processes",
  "Improve Accuracy",
  "Enhance Decision-Making"
]

export function CtaSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect your entire business with Intelligent Shariah AI Infrastructure
          </h2>
          
          <div className="flex justify-center gap-8 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}