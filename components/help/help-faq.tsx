"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

interface HelpFaqProps {
  searchQuery: string
}

const faqs = [
  {
    question: "What is Xariabase?",
    answer: "Xariabase is an AI-powered platform designed specifically for Islamic finance. It provides tools and services to help financial institutions, scholars, and professionals ensure Shariah compliance and optimize their operations."
  },
  {
    question: "How does the AI analysis work?",
    answer: "Our AI system analyzes financial documents and contracts using advanced natural language processing, comparing them against established Shariah principles and guidelines. It identifies potential compliance issues and provides detailed recommendations."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All data is encrypted both in transit and at rest, and we maintain strict access controls. We comply with international data protection standards and Shariah requirements for data handling."
  },
  {
    question: "Can I collaborate with team members?",
    answer: "Yes, Xariabase supports team collaboration. You can invite team members, assign roles, share projects, and communicate within the platform. Each team member can have different permission levels based on their role."
  },
  {
    question: "What types of documents can be analyzed?",
    answer: "Our system can analyze various Islamic finance documents including Murabaha contracts, Sukuk documentation, Ijara agreements, and general Shariah compliance documents. We support multiple file formats including PDF, DOC, and DOCX."
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI system maintains a high accuracy rate, validated by leading Shariah scholars. However, we recommend using it as a support tool alongside human expertise, not as a replacement for qualified Shariah scholars."
  },
  {
    question: "What support options are available?",
    answer: "We offer multiple support channels including email support, live chat, and scheduled consultations. Premium users also get access to priority support and direct communication with our expert team."
  },
  {
    question: "How are updates and improvements handled?",
    answer: "We regularly update our AI models and platform features based on user feedback and new developments in Islamic finance. All updates are automatically applied, and major changes are communicated to users in advance."
  }
]

export function HelpFaq({ searchQuery }: HelpFaqProps) {
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Card className="p-6">
      <Accordion type="single" collapsible className="w-full">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}