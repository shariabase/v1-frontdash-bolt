"use client"

import { useState } from "react" 
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProjectCard } from "@/components/projects/project-card"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"

const myProjects = [
  {
    id: "1",
    title: "Murabaha Contract Analysis",
    description: "Automated analysis of Murabaha contracts for compliance and risk assessment.",
    status: "active" as const,
    progress: 75,
    lastUpdated: "2 hours ago",
    collaborators: 3,
    type: "Contract Analysis"
  },
  {
    id: "2",
    title: "Ijara Documentation",
    description: "Standardization of Ijara documentation across multiple jurisdictions.",
    status: "pending" as const,
    progress: 30,
    lastUpdated: "1 day ago",
    collaborators: 4,
    type: "Documentation"
  },
  {
    id: "3",
    title: "Sukuk Performance Review",
    description: "Annual performance review of Sukuk investments and compliance check.",
    status: "completed" as const,
    progress: 100,
    lastUpdated: "1 week ago",
    collaborators: 2,
    type: "Analysis"
  }
]

const sharedProjects = [
  {
    title: "Shariah Audit Framework",
    description: "Development of comprehensive Shariah audit framework for Islamic banks.",
    status: "active" as const,
    progress: 60,
    lastUpdated: "3 hours ago",
    collaborators: 5,
    type: "Audit"
  },
  {
    title: "Zakat Distribution System",
    description: "Automated system for efficient Zakat collection and distribution.",
    status: "completed" as const,
    progress: 100,
    lastUpdated: "5 days ago",
    collaborators: 3,
    type: "System"
  }
]

const projectTypes = ["All", "Contract Analysis", "Documentation", "Analysis", "Audit", "System"]
const statusOptions = ["All", "Active", "Pending", "Completed"]

export default function ProjectsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filterProjects = (projects: typeof myProjects) => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = selectedType === "All" || project.type === selectedType
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus.toLowerCase()
      
      return matchesSearch && matchesType && matchesStatus
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">
            Manage and track your Islamic finance projects
          </p>
        </div>
        <Button onClick={() => router.push("/launchapp/projects/new")}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <Card className="p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      <Tabs defaultValue="my-projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared with Me</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-projects" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filterProjects(myProjects).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {filterProjects(myProjects).length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No projects found matching your filters
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="shared" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filterProjects(sharedProjects).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {filterProjects(sharedProjects).length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No shared projects found matching your filters
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}