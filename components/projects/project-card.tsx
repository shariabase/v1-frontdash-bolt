"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { Clock, Users } from "lucide-react"

interface ProjectCardProps {
  id?: string
  title: string
  description: string
  status: "active" | "pending" | "completed"
  progress: number
  lastUpdated: string
  collaborators: number,
  type: string
}

export function ProjectCard({ 
  id = "1",
  title, 
  description, 
  status, 
  progress, 
  lastUpdated,
  collaborators,
  type
}: ProjectCardProps) {
  const router = useRouter()
  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    completed: "bg-blue-500"
  }

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg"
      onClick={() => router.push(`/launchapp/projects/${id}`)}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{type}</Badge>
            <Badge className={statusColors[status]}>{status}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Progress value={progress} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {lastUpdated}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {collaborators}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}