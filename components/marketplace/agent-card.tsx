"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"

interface AgentCardProps {
  id?: string
  name: string
  description: string
  rating: number
  price: number
  specialization: string[]
  image: string
}

export function AgentCard({ id = "1", name, description, rating, price, specialization, image }: AgentCardProps) {
  const router = useRouter()

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
      onClick={() => router.push(`/launchapp/marketplace/${id}`)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {specialization.map((spec, index) => (
            <Badge key={index} variant="secondary">{spec}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${price}/mo</span>
        <Button>Hire Agent</Button>
      </CardFooter>
    </Card>
  )
}