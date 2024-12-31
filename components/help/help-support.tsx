"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Mail,
  PhoneCall,
  Calendar,
  FileText,
  BookOpen
} from "lucide-react"

const supportOptions = [
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageSquare,
    action: "Start Chat",
    premium: false
  },
  {
    title: "Email Support",
    description: "Get help via email within 24 hours",
    icon: Mail,
    action: "Send Email",
    premium: false
  },
  {
    title: "Phone Support",
    description: "Speak directly with our expert team",
    icon: PhoneCall,
    action: "Call Now",
    premium: true
  },
  {
    title: "Schedule Consultation",
    description: "Book a one-on-one consultation",
    icon: Calendar,
    action: "Schedule",
    premium: true
  }
]

const resources = [
  {
    title: "Documentation",
    description: "Detailed guides and API documentation",
    icon: FileText,
    url: "#"
  },
  {
    title: "Knowledge Base",
    description: "In-depth articles and tutorials",
    icon: BookOpen,
    url: "#"
  }
]

export function HelpSupport() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {supportOptions.map((option) => (
          <Card key={option.title}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold flex items-center gap-2">
                    {option.title}
                    {option.premium && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                        Premium
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                <Button variant={option.premium ? "outline" : "default"}>
                  {option.action}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-8 mb-4">Additional Resources</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource.title}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <a href={resource.url}>View</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}