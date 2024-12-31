"use client"

import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useChatStore } from "@/lib/stores/chat-store"
import { Check, CheckCheck } from "lucide-react"

interface ChatMessagesProps {
  className?: string
  isWidget?: boolean
}

export function ChatMessages({ className, isWidget }: ChatMessagesProps) {
  const messages = useChatStore((state) => state.messages)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <ScrollArea className={cn("p-4", className)} ref={scrollRef}>
      <div className="space-y-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-2",
              message.sender === "You" && "justify-end"
            )}
          >
            {message.sender !== "You" && (
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.avatar} />
                <AvatarFallback>
                  {message.sender.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                "rounded-lg p-3 max-w-[80%]",
                message.sender === "You" 
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              {!isWidget && (
                <p className="text-sm font-medium mb-1">{message.sender}</p>
              )}
              <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
              <div className="flex items-center gap-1 mt-1">
                <p className="text-xs text-muted-foreground">
                  {message.timestamp}
                </p>
                {message.sender === "You" && (
                  <div className="text-xs text-muted-foreground">
                    {message.status === "read" ? (
                      <CheckCheck className="h-3 w-3" />
                    ) : (
                      <Check className="h-3 w-3" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}