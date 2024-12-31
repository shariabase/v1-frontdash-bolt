"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "The Future of Islamic Finance",
    description: "Explore how AI is transforming Shariah-compliant banking",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "March 15, 2024"
  },
  {
    title: "Understanding Smart Contracts",
    description: "A comprehensive guide to blockchain in Islamic finance",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    date: "March 12, 2024"
  },
  {
    title: "Ethical AI Development",
    description: "Building AI systems aligned with Islamic principles",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    date: "March 10, 2024"
  }
]

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest trends and insights
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="ml-auto" asChild>
                  <Link href={`/blog/${article.title.toLowerCase().replace(/ /g, "-")}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}