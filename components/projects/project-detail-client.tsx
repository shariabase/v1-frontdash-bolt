"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, FileText, MessageSquare } from "lucide-react"

interface ProjectDetailClientProps {
  data: {
    id: string
    title: string
    description: string
    status: string
    progress: number
    lastUpdated: string
    collaborators: Array<{
      name: string
      role: string
    }>
    type: string
    documents: Array<{
      name: string
      size: string
      uploaded: string
    }>
    activities: Array<{
      type: string
      user: string
      content: string
      time: string
    }>
  }
}

export function ProjectDetailClient({ data }: ProjectDetailClientProps) {
  const params = useParams()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Share</Button>
          <Button>Edit Project</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-sm font-medium">Progress</CardHeader>
          <CardContent>
            <Progress value={data.progress} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{data.progress}% Complete</span>
              <Badge>{data.status}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-sm font-medium">Timeline</CardHeader>
          <CardContent className="flex items-center gap-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-sm text-muted-foreground">{data.lastUpdated}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-sm font-medium">Team</CardHeader>
          <CardContent className="flex items-center gap-4">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{data.collaborators.length} Collaborators</p>
              <p className="text-sm text-muted-foreground">Active Team</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Team Members</h3>
                  <div className="space-y-4">
                    {data.collaborators.map((member, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {member.name[0]}
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {data.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.size} • Uploaded on {doc.uploaded}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {data.activities.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p>
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-muted-foreground"> {activity.content}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}