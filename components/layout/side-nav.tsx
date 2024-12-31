"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavItems } from "./nav-items"
import { UserNav } from "./user-nav"

export function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "flex flex-col border-r bg-background",
      isCollapsed ? "w-[80px]" : "w-[240px]"
    )}>
      <div className="flex h-[60px] items-center border-b px-2">
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed ? "" : "rotate-180"
          )} />
        </Button>
      </div>
      <ScrollArea className="flex-1 pt-4">
        <NavItems isCollapsed={isCollapsed} />
      </ScrollArea>
      <UserNav isCollapsed={isCollapsed} />
    </div>
  )
}