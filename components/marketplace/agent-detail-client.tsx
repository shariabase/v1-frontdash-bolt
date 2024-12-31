"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, CheckCircle, Users } from "lucide-react"

interface AgentDetailClientProps {
  data: any // Type this properly based on your data structure
}

export function AgentDetailClient({ data }: AgentDetailClientProps) {
  const params = useParams()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{data.rating}</span>
            </div>
            {data.specialization.map((spec: string, index: number) => (
              <Badge key={index} variant="secondary">{spec}</Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold">${data.price}/mo</p>
          <Button>Hire Agent</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardContent className="pt-6">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-muted-foreground">{data.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="text-lg font-medium">Key Features</CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {data.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data.stats).map(([key, value]) => (
              <Card key={key}>
                <CardContent className="pt-6">
                  <h3 className="text-sm font-medium mb-2 capitalize">
                    {key.replace('_', ' ')}
                  </h3>
                  <p className="text-2xl font-bold">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="text-lg font-medium">Reviews</CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.reviews.map((review: any, index: number) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {review.user[0]}
                    </div>
                    <span className="font-medium">{review.user}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">{review.comment}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}