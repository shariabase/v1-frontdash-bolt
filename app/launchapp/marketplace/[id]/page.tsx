import { AgentDetailClient } from "@/components/marketplace/agent-detail-client"

// This would typically come from an API
const agentData = {
  id: "1",
  name: "Fatwa Analyzer Pro",
  description: "Advanced AI agent specialized in analyzing and comparing fatwas across different schools of thought.",
  rating: 4.8,
  price: 299,
  specialization: ["Fatwa Analysis", "Comparative Fiqh", "Research"],
  image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=600",
  features: [
    "Real-time fatwa analysis",
    "Multi-madhab comparison",
    "Source verification",
    "Historical context analysis"
  ],
  stats: {
    accuracy: "98%",
    response_time: "< 2 seconds",
    languages: "Arabic, English, Urdu",
    users: "1,200+"
  },
  reviews: [
    {
      user: "Dr. Ahmad Khan",
      rating: 5,
      comment: "Exceptional tool for comparative fiqh analysis.",
      date: "2 days ago"
    },
    {
      user: "Sarah Mohammed",
      rating: 4,
      comment: "Very helpful for research purposes.",
      date: "1 week ago"
    }
  ]
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ]
}

export default function AgentDetailPage() {
  return <AgentDetailClient data={agentData} />
}