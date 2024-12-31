"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Wallet,
  Building2,
  ShieldCheck,
  PiggyBank,
  Briefcase,
  Store,
  Shield,
  BadgeDollarSign
} from "lucide-react"

const financialSolutions = [
  { icon: Wallet, title: "Investments" },
  { icon: ShieldCheck, title: "Loans" },
  { icon: Shield, title: "Insurance" },
  { icon: PiggyBank, title: "Savings" }
]

const businessSolutions = [
  { icon: Briefcase, title: "Business Loans" },
  { icon: Store, title: "Merchant Services" },
  { icon: Building2, title: "Business Insurance" },
  { icon: BadgeDollarSign, title: "Business Savings" }
]

export default function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of Shariah-compliant financial and business solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Financial Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {financialSolutions.map((solution) => (
                  <div
                    key={solution.title}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    <solution.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{solution.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {businessSolutions.map((solution) => (
                  <div
                    key={solution.title}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    <solution.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{solution.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}