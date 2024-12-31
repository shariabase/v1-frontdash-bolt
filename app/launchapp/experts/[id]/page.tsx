import { ExpertDetailClient } from "@/components/experts/expert-detail-client"

// This would typically come from an API
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
    price: 85,
    bio: "Expert in Islamic finance content with a focus on Shariah compliance and regulatory frameworks. Published author and regular contributor to leading financial journals.",
    expertise: [
      "Islamic Banking",
      "Shariah Compliance",
      "Financial Documentation",
      "Regulatory Frameworks"
    ],
    languages: ["English", "Arabic", "Urdu"],
    availability: "Within 24 hours",
    reviews: [
      {
        id: "1",
        author: "Mohammed Ali",
        rating: 5,
        comment: "Exceptional attention to detail and deep understanding of Islamic finance principles.",
        date: "2 days ago"
      },
      {
        id: "2",
        author: "Aisha Khan",
        rating: 4,
        comment: "Very professional and thorough in her work. Highly recommended.",
        date: "1 week ago"
      }
    ]
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
    price: 95,
    bio: "Seasoned expert in Islamic banking with extensive experience in technical documentation and compliance frameworks.",
    expertise: [
      "Technical Documentation",
      "Banking Systems",
      "Risk Assessment",
      "Compliance Auditing"
    ],
    languages: ["English", "Arabic"],
    availability: "Available now",
    reviews: []
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
    price: 75,
    bio: "Specialized in Shariah law with focus on financial documentation and regulatory compliance.",
    expertise: [
      "Shariah Law",
      "Financial Compliance",
      "Document Review",
      "Quality Assurance"
    ],
    languages: ["English", "Arabic", "Malay"],
    availability: "Within 48 hours",
    reviews: []
  }
]

export function generateStaticParams() {
  return experts.map((expert) => ({
    id: expert.id
  }))
}

export default function ExpertDetailPage({ params }: { params: { id: string } }) {
  const expert = experts.find(e => e.id === params.id) || experts[0]
  return <ExpertDetailClient data={expert} />
}