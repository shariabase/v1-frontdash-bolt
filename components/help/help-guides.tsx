"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, Users, Shield } from "lucide-react"

interface HelpGuidesProps {
  searchQuery: string
}

const guides = [
  {
    title: "Getting Started",
    description: "Learn the basics of using Xariabase AI tools",
    icon: BookOpen,
    articles: [
      "Platform Overview",
      "Creating Your First Project",
      "Understanding AI Agents",
      "Basic Navigation"
    ]
  },
  {
    title: "Project Management",
    description: "Master project creation and collaboration",
    icon: FileText,
    articles: [
      "Creating Projects",
      "Inviting Team Members",
      "Project Templates",
      "Document Analysis"
    ]
  },
  {
    title: "Team Collaboration",
    description: "Work effectively with your team",
    icon: Users,
    articles: [
      "Team Roles & Permissions",
      "Sharing Projects",
      "Communication Tools",
      "Activity Tracking"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Understand our security measures",
    icon: Shield,
    articles: [
      "Data Security",
      "Shariah Compliance",
      "Privacy Settings",
      "Audit Logs"
    ]
  }
]

export function HelpGuides({ searchQuery }: HelpGuidesProps) {
  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.articles.some(article => 
      article.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredGuides.map((guide) => (
        <Card key={guide.title}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10">
              <guide.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{guide.title}</h3>
              <p className="text-sm text-muted-foreground">
                {guide.description}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {guide.articles.map((article) => (
                <Button
                  key={article}
                  variant="ghost"
                  className="w-full justify-between"
                >
                  {article}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}