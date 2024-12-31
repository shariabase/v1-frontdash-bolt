import { Card } from "@/components/ui/card"
import { ChatMessages } from "@/components/chat/chat-messages"
import { ChatInput } from "@/components/chat/chat-input"

export default function ChatPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Chat</h1>
        <p className="text-muted-foreground">Connect with AI assistants and team members</p>
      </div>
      <Card className="flex flex-col h-[calc(100vh-12rem)]">
        <ChatMessages className="flex-1" />
        <ChatInput className="p-4 border-t" />
      </Card>
    </div>
  )
}