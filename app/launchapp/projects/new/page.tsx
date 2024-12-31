"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileUploader } from "@/components/projects/file-uploader"
import { ArrowLeft } from "lucide-react"

const analysisTypes = [
  { value: "fiqh", label: "Fiqh (Islamic Jurisprudence)" },
  { value: "aqeedah", label: "Aqeedah (Islamic Beliefs)" },
  { value: "general", label: "General Islamic Guidance" },
  { value: "comparative", label: "Comparative Analysis" }
]

export default function NewProjectPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    analysisType: "",
    file: null as File | null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would typically make an API call to create the project
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
      router.push("/launchapp/projects")
    } catch (error) {
      console.error("Failed to create project:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold mb-2">New Analysis Project</h1>
        <p className="text-muted-foreground">
          Create a new Islamic opinion analysis project
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Title</label>
            <Input
              placeholder="Enter project title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description (Optional)</label>
            <Textarea
              placeholder="Enter project description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Analysis Type</label>
            <Select
              value={formData.analysisType}
              onValueChange={(value) => setFormData({ ...formData, analysisType: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select analysis type" />
              </SelectTrigger>
              <SelectContent>
                {analysisTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Upload Document</label>
            <FileUploader
              onFileSelect={(file) => setFormData({ ...formData, file })}
              accept=".pdf"
              maxSize={10} // 10MB
            />
            <p className="text-xs text-muted-foreground">
              Maximum file size: 10MB. Supported format: PDF
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating Project..." : "Create Project"}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  )
}