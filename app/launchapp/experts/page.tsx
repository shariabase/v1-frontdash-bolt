"use client"

import { useState } from "react"
import { ExpertsFilters } from "@/components/experts/experts-filters"
import { ExpertsGrid } from "@/components/experts/experts-grid"

export default function ExpertsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [specialization, setSpecialization] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Hire an Expert</h1>
        <p className="text-muted-foreground">
          Connect with our network of Islamic finance specialists
        </p>
      </div>

      <ExpertsFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        specialization={specialization}
        onSpecializationChange={setSpecialization}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <ExpertsGrid
        searchQuery={searchQuery}
        specialization={specialization}
        priceRange={priceRange}
        sortBy={sortBy}
      />
    </div>
  )
}