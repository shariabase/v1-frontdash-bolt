"use client"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"

interface ExpertsFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  specialization: string
  onSpecializationChange: (value: string) => void
  priceRange: string
  onPriceRangeChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
}

export function ExpertsFilters({
  searchQuery,
  onSearchChange,
  specialization,
  onSpecializationChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange
}: ExpertsFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search experts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Select value={specialization} onValueChange={onSpecializationChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specializations</SelectItem>
            <SelectItem value="content">Content Editor</SelectItem>
            <SelectItem value="proofreader">Proofreader</SelectItem>
            <SelectItem value="technical">Technical Editor</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-50">$0 - $50/hr</SelectItem>
            <SelectItem value="51-100">$51 - $100/hr</SelectItem>
            <SelectItem value="101+">$101+/hr</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}