"use client"

import { SideNav } from "@/components/layout/side-nav"
import { TopNav } from "@/components/layout/top-nav"
import { ChatWidget } from "@/components/chat/chat-widget"
import { Providers } from "@/components/providers/providers"

export default function LaunchAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-6 bg-muted/10">
            {children}
          </main>
        </div>
        <ChatWidget />
      </div>
    </Providers>
  )
}