"use client"

import { TopNav } from "@/components/layout/top-nav"
import { SideNav } from "@/components/layout/side-nav"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: "AI Assistant",
    content: "Hello! How can I help you with Islamic finance today?",
    timestamp: "10:00 AM"
  },
  {
    id: 2,
    sender: "You",
    content: "I need help understanding Murabaha contracts",
    timestamp: "10:01 AM"
  },
  {
    id: 3,
    sender: "AI Assistant",
    content: "I'd be happy to explain Murabaha contracts. A Murabaha contract is a cost-plus financing arrangement that complies with Islamic law. Would you like me to break down its key components?",
    timestamp: "10:01 AM"
  }
]

export default function Chat() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-muted/10">
          <Card className="flex flex-col h-[calc(100vh-8rem)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex flex-col ${
                      message.sender === "You" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "You"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm font-medium mb-1">{message.sender}</p>
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}