"use client"

import { useState } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { TokenImport } from "@/components/dashboard/token-import"
import { PerformanceTable } from "@/components/dashboard/performance-table"
import { Activity, Users, Wallet as WalletIcon, Trophy } from "lucide-react"

export default function DashboardPage() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">What would you like to explore today?</p>
        </div>
        <TokenImport />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          {
            title: "Active Projects",
            value: 12,
            icon: Activity,
            description: "+2 from last month",
            id: "projects"
          },
          {
            title: "Team Members",
            value: 8,
            icon: Users,
            description: "Across 3 projects",
            id: "team"
          },
          {
            title: "Total Revenue",
            value: "$12,450",
            icon: WalletIcon,
            description: "+15% from last month",
            id: "revenue"
          },
          {
            title: "Reward Points",
            value: 850,
            icon: Trophy,
            description: "Gold tier achieved",
            id: "rewards"
          }
        ].map((metric) => (
          <StatsCard
            key={metric.id}
            {...metric}
            icon={<metric.icon className="h-4 w-4 text-muted-foreground" />}
            onClick={() => setSelectedMetric(metric.id)}
            isSelected={selectedMetric === metric.id}
          />
        ))}
      </div>
      
      {selectedMetric && (
        <PerformanceTable />
      )}
    </div>
  )
}