"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential features for getting started",
    features: [
      "Basic Shariah compliance checks",
      "Limited AI analysis",
      "Community support",
      "1 project",
      "Basic reporting"
    ]
  },
  {
    name: "Pro",
    price: "$49/month",
    description: "Perfect for growing businesses",
    features: [
      "Advanced Shariah compliance",
      "Full AI analysis capabilities",
      "Priority support",
      "Unlimited projects",
      "Advanced analytics",
      "Custom reports",
      "Team collaboration",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom Shariah compliance rules",
      "Dedicated AI resources",
      "24/7 premium support",
      "Unlimited everything",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Dedicated account manager"
    ]
  }
]

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan)
    setShowDialog(true)
  }

  const handleConfirm = () => {
    // Here you would typically make an API call to update the subscription
    console.log(`Subscribing to ${selectedPlan?.name} plan`)
    setShowDialog(false)
  }
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Subscription</h1>
        <p className="text-muted-foreground">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={plan.popular ? "border-primary relative" : ""}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-4">
                <span>{plan.name}</span>
                <span className="text-3xl font-bold">{plan.price}</span>
              </CardTitle>
              <p className="text-center text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handlePlanSelect(plan)}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Subscription</DialogTitle>
            <DialogDescription>
              {selectedPlan?.price === "Custom" ? (
                <>
                  Our team will contact you shortly to discuss your enterprise needs
                  and create a custom plan that fits your organization.
                </>
              ) : (
                <>
                  You are about to subscribe to the {selectedPlan?.name} plan at{" "}
                  {selectedPlan?.price}.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              {selectedPlan?.price === "Custom" ? "Contact Sales" : "Confirm Subscription"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}