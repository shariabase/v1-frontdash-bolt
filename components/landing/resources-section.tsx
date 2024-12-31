"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, HelpCircle, BookOpen, HeadphonesIcon } from "lucide-react"

const resources = [
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "Get in touch with our team",
    href: "/contact"
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to common questions",
    href: "/faqs"
  },
  {
    icon: BookOpen,
    title: "Blog",
    description: "Latest insights and updates",
    href: "/blog"
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "24/7 customer support",
    href: "/support"
  }
]

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resources & Support</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started and grow with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={resource.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}