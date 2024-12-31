"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Smile } from "lucide-react"
import { cn } from "@/lib/utils"
import { useChatStore } from "@/lib/stores/chat-store"

interface ChatInputProps {
  className?: string
}

export function ChatInput({ className }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const sendMessage = useChatStore((state) => state.sendMessage)

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={cn("flex items-center gap-2 bg-background", className)}>
      <Button variant="ghost" size="icon">
        <Smile className="h-5 w-5" />
      </Button>
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 bg-transparent"
      />
      <Button onClick={handleSend} disabled={!message.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </div>
  )
}