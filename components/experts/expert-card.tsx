"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExpertCardProps {
  expert: {
    id: string
    name: string
    image: string
    credentials: string
    specialization: string
    experience: number
    rating: number
    projects: number
    price: number
  }
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex p-4 gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold truncate">{expert.name}</h3>
              <p className="text-sm text-muted-foreground">{expert.credentials}</p>
            </div>
            <Badge variant="secondary">{expert.specialization}</Badge>
          </div>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3 h-3",
                      i < expert.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm">({expert.projects})</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Briefcase className="w-3 h-3" />
              <span>{expert.experience}y exp</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">${expert.price}/hr</span>
            <Button size="sm" onClick={() => window.location.href = `/launchapp/experts/${expert.id}`}>
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}