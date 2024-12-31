"use client"

import { TopNav } from "@/components/layout/top-nav"
import { SideNav } from "@/components/layout/side-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Gift, Crown } from "lucide-react"

const rewards = [
  {
    title: "Premium Access",
    points: 1000,
    description: "Get 1 month of premium access to all features",
    icon: Crown
  },
  {
    title: "Custom Report",
    points: 500,
    description: "Generate a custom analysis report",
    icon: Gift
  }
]

const leaderboard = [
  { name: "Sarah Ahmed", points: 2500, rank: 1 },
  { name: "Mohammed Ali", points: 2300, rank: 2 },
  { name: "John Doe", points: 2100, rank: 3 },
  { name: "Lisa Chen", points: 1900, rank: 4 },
  { name: "Ahmad Hassan", points: 1800, rank: 5 }
]

export default function Rewards() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-muted/10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Rewards</h1>
            <p className="text-muted-foreground">
              Track your progress and claim rewards
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">850 Points</span>
                    <span className="text-sm text-muted-foreground">Next: 1000</span>
                  </div>
                  <Progress value={85} />
                  <p className="text-sm text-muted-foreground">
                    150 points until your next reward
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewards.map((reward, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <reward.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{reward.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {reward.description}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">
                        Claim ({reward.points}pts)
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {user.rank}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>{user.points} pts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}