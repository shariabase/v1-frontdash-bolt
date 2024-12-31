"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpGuides } from "@/components/help/help-guides"
import { HelpFaq } from "@/components/help/help-faq"
import { HelpSupport } from "@/components/help/help-support"
import { Search } from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground">
            Find answers, guides, and support for Islamic finance AI tools
          </p>
        </div>
        <Button variant="outline" onClick={() => window.open("mailto:support@xariabase.com")}>
          Contact Support
        </Button>
      </div>

      <Card className="p-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>

      <Tabs defaultValue="guides" className="space-y-4">
        <TabsList>
          <TabsTrigger value="guides">Quick Start Guides</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="guides">
          <HelpGuides searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="faq">
          <HelpFaq searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="support">
          <HelpSupport />
        </TabsContent>
      </Tabs>
    </div>
  )
}