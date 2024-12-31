"use client"

import { TopNav } from "@/components/layout/top-nav"
import { SideNav } from "@/components/layout/side-nav"
import { AgentCard } from "@/components/marketplace/agent-card"

const agents = [
  {
    name: "Fatwa Analyzer Pro",
    description: "Advanced AI agent specialized in analyzing and comparing fatwas across different schools of thought.",
    rating: 4.8,
    price: 299,
    specialization: ["Fatwa Analysis", "Comparative Fiqh", "Research"],
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sukuk Structuring Assistant",
    description: "Expert system for Islamic bond structuring and compliance verification.",
    rating: 4.9,
    price: 499,
    specialization: ["Sukuk", "Investment", "Compliance"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Zakat Calculator Plus",
    description: "Intelligent agent for precise zakat calculations and wealth management advice.",
    rating: 4.7,
    price: 199,
    specialization: ["Zakat", "Finance", "Advisory"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
  }
]

export default function Marketplace() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-muted/10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Agent Marketplace</h1>
            <p className="text-muted-foreground">
              Explore and hire AI agents specialized in Islamic finance
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}