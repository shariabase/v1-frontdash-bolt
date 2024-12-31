"use client"

import { TopNav } from "@/components/layout/top-nav"
import { SideNav } from "@/components/layout/side-nav"
import { ProjectCard } from "@/components/projects/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const myProjects = [
  {
    title: "Murabaha Contract Analysis",
    description: "Automated analysis of Murabaha contracts for compliance and risk assessment.",
    status: "active" as const,
    progress: 75,
    lastUpdated: "2 hours ago",
    collaborators: 3
  },
  {
    title: "Ijara Documentation",
    description: "Standardization of Ijara documentation across multiple jurisdictions.",
    status: "pending" as const,
    progress: 30,
    lastUpdated: "1 day ago",
    collaborators: 4
  },
  {
    title: "Sukuk Performance Review",
    description: "Annual performance review of Sukuk investments and compliance check.",
    status: "completed" as const,
    progress: 100,
    lastUpdated: "1 week ago",
    collaborators: 2
  }
]

const sharedProjects = [
  {
    title: "Shariah Audit Framework",
    description: "Development of comprehensive Shariah audit framework for Islamic banks.",
    status: "active" as const,
    progress: 60,
    lastUpdated: "3 hours ago",
    collaborators: 5
  },
  {
    title: "Zakat Distribution System",
    description: "Automated system for efficient Zakat collection and distribution.",
    status: "completed" as const,
    progress: 100,
    lastUpdated: "5 days ago",
    collaborators: 3
  }
]

export default function Projects() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-muted/10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track your Islamic finance projects
            </p>
          </div>
          
          <Tabs defaultValue="my-projects" className="space-y-4">
            <TabsList>
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared with Me</TabsTrigger>
            </TabsList>
            
            <TabsContent value="my-projects" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="shared" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sharedProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}