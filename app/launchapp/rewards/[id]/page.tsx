"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Gift, Clock, Users, CheckCircle } from "lucide-react"

// This would typically come from an API
const rewardData = {
  id: "1",
  title: "Premium Access",
  points: 1000,
  description: "Get 1 month of premium access to all features",
  icon: Trophy,
  progress: 850,
  requirements: [
    "Maintain active subscription for 3 months",
    "Complete 5 project analyses",
    "Achieve 90% accuracy rating"
  ],
  benefits: [
    "Unlimited AI analysis",
    "Priority support",
    "Advanced analytics",
    "Custom report generation"
  ],
  timeline: "Valid for 30 days after claiming",
  claimers: [
    { name: "Sarah Ahmed", date: "2 days ago" },
    { name: "Mohammed Ali", date: "1 week ago" }
  ]
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" }
  ]
}

export default function RewardDetailPage() {
  const params = useParams()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{rewardData.title}</h1>
          <p className="text-muted-foreground">{rewardData.description}</p>
        </div>
        <Button size="lg">
          <Gift className="mr-2 h-5 w-5" />
          Claim Reward
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="text-lg font-medium">Progress</CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">{rewardData.progress} Points</span>
                <span className="text-sm text-muted-foreground">
                  Target: {rewardData.points}
                </span>
              </div>
              <Progress 
                value={(rewardData.progress / rewardData.points) * 100} 
              />
              <p className="text-sm text-muted-foreground">
                {rewardData.points - rewardData.progress} points needed to claim
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium">Timeline</CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Reward Duration</p>
                <p className="text-sm text-muted-foreground">
                  {rewardData.timeline}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium">Requirements</CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rewardData.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium">Benefits</CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rewardData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="text-lg font-medium">Recent Claims</CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rewardData.claimers.map((claimer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {claimer.name[0]}
                  </div>
                  <span className="font-medium">{claimer.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{claimer.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}