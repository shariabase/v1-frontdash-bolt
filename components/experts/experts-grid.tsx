"use client"

import { ExpertCard } from "./expert-card"

const experts = [
  {
    id: "1",
    name: "Dr. Sarah Ahmed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    credentials: "Ph.D. in Islamic Finance",
    specialization: "Content Editor",
    experience: 8,
    rating: 4.9,
    projects: 127,
    price: 85
  },
  {
    id: "2",
    name: "Prof. Mohammed Ali",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300",
    credentials: "Islamic Banking Expert",
    specialization: "Technical Editor",
    experience: 12,
    rating: 4.8,
    projects: 243,
    price: 95
  },
  {
    id: "3",
    name: "Dr. Aisha Hassan",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300",
    credentials: "Shariah Law Specialist",
    specialization: "Proofreader",
    experience: 6,
    rating: 4.7,
    projects: 89,
    price: 75
  }
]

interface ExpertsGridProps {
  searchQuery: string
  specialization: string
  priceRange: string
  sortBy: string
}

export function ExpertsGrid({
  searchQuery,
  specialization,
  priceRange,
  sortBy
}: ExpertsGridProps) {
  const filteredExperts = experts
    .filter(expert => {
      const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          expert.credentials.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSpecialization = specialization === "all" || expert.specialization.toLowerCase() === specialization
      
      let matchesPriceRange = true
      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(Number)
        if (max) {
          matchesPriceRange = expert.price >= min && expert.price <= max
        } else {
          matchesPriceRange = expert.price >= min
        }
      }
      
      return matchesSearch && matchesSpecialization && matchesPriceRange
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "experience":
          return b.experience - a.experience
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        default:
          return 0
      }
    })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredExperts.map((expert, index) => (
        <ExpertCard key={expert.id} expert={expert} index={index} />
      ))}
    </div>
  )
}