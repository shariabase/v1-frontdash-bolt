import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

export interface Message {
  id: string
  content: string
  sender: string
  timestamp: string
  status: "sent" | "delivered" | "read"
  avatar?: string
}

interface ChatStore {
  messages: Message[]
  sendMessage: (content: string) => void
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "AI Assistant",
    content: "Hello! How can I help you with Islamic finance today?",
    timestamp: "10:00 AM",
    status: "read",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  }
]

export const useChatStore = create<ChatStore>((set) => ({
  messages: initialMessages,
  sendMessage: (content: string) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: uuidv4(),
          content,
          sender: "You",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          status: "sent"
        }
      ]
    }))
}))