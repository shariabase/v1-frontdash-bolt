"use client"

import { useParams } from "next/navigation"
import { ExpertDetail } from "@/components/experts/expert-detail"

interface ExpertDetailClientProps {
  data: any // Type this properly based on your data structure
}

export function ExpertDetailClient({ data }: ExpertDetailClientProps) {
  const params = useParams()
  return <ExpertDetail data={data} />
}