"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Minimize2 } from "lucide-react"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [unreadCount, setUnreadCount] = useState(2)

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 z-50 transition-all duration-300 h-screen flex flex-col justify-end",
        isExpanded ? "w-[380px]" : "w-auto"
      )}
    >
      {!isExpanded && (
        <Button
          size="lg" 
          className="relative mb-4 mr-4"
          onClick={() => setIsExpanded(true)}
        >
          <MessageSquare className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      )}

      {isExpanded && (
        <Card className="flex flex-col h-[calc(100vh-2rem)] m-4 shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="font-semibold">Chat</h3>
              <p className="text-sm text-muted-foreground">3 online</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>
          <ChatMessages className="flex-1" isWidget={true} />
          <ChatInput className="p-4 border-t" />
        </Card>
      )}
    </div>
  )
}