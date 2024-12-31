"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  ShoppingBag,
  FolderKanban,
  Gift, 
  UserCog,
  MessageSquare
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/launchapp" },
  { icon: ShoppingBag, label: "Marketplace", href: "/launchapp/marketplace" },
  { icon: UserCog, label: "Hire an Expert", href: "/launchapp/experts" },
  { icon: FolderKanban, label: "Projects", href: "/launchapp/projects" },
  { icon: MessageSquare, label: "Chat", href: "/launchapp/chat" },
  { icon: Gift, label: "Rewards", href: "/launchapp/rewards" }
]

interface NavItemsProps {
  isCollapsed: boolean
}

export function NavItems({ isCollapsed }: NavItemsProps) {
  const pathname = usePathname()

  return (
    <nav className="grid gap-1 px-2">
      {menuItems.map((item, index) => (
        <Tooltip key={index} delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                "transition-all duration-200 ease-in-out",
                "nav-item"
              )}
              data-active={pathname === item.href}
            >
              <item.icon className="h-4 w-4" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right" className="flex items-center gap-4">
              {item.label}
            </TooltipContent>
          )}
        </Tooltip>
      ))}
    </nav>
  )
}