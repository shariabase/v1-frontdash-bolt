import { ProjectDetailClient } from "@/components/projects/project-detail-client"

// This would typically come from an API
const projectData = {
  id: "1",
  title: "Murabaha Contract Analysis",
  description: "Automated analysis of Murabaha contracts for compliance and risk assessment.",
  status: "active",
  progress: 75,
  lastUpdated: "2 hours ago",
  collaborators: [
    { name: "Sarah Ahmed", role: "Lead Analyst" },
    { name: "Mohammed Ali", role: "Shariah Expert" },
    { name: "John Doe", role: "Technical Reviewer" }
  ],
  type: "Contract Analysis",
  documents: [
    { name: "Murabaha_Contract_v1.pdf", size: "2.4 MB", uploaded: "2024-03-15" },
    { name: "Analysis_Notes.pdf", size: "1.1 MB", uploaded: "2024-03-16" }
  ],
  activities: [
    { type: "comment", user: "Sarah Ahmed", content: "Initial analysis completed", time: "2 hours ago" },
    { type: "upload", user: "Mohammed Ali", content: "Uploaded revised contract", time: "1 day ago" }
  ]
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ]
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient data={projectData} />
}