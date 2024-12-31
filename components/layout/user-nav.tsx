"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Settings,
  HelpCircle,
  LogOut,
  CreditCard
} from "lucide-react"

interface UserNavProps {
  isCollapsed: boolean
}

export function UserNav({ isCollapsed }: UserNavProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="mt-auto border-t p-4">
      <Button 
        variant="ghost" 
        className={cn(
          "w-full flex items-center gap-2 p-2 -ml-2",
          "hover:bg-primary/10 hover:text-primary",
          "transition-all duration-200 ease-in-out"
        )}
        onClick={() => router.push("/launchapp/profile")}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        {!isCollapsed && (
          <div className="space-y-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Pro Plan</p>
          </div>
        )}
      </Button>
      <div className="mt-4 grid gap-1">
        <Button 
          variant="ghost"
          size="sm" 
          className={cn(
            "w-full justify-start",
            "transition-all duration-200 ease-in-out",
            "hover:bg-primary/10 hover:text-primary",
            "data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
          )}
          data-active={pathname === "/launchapp/subscription"}
          asChild
        >
          <Link href="/launchapp/subscription">
          <CreditCard className="mr-2 h-4 w-4" />
          {!isCollapsed && "My Subscription"}
          </Link>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "w-full justify-start",
            "transition-all duration-200 ease-in-out",
            "hover:bg-primary/10 hover:text-primary",
            "data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
          )}
          data-active={pathname === "/launchapp/settings"}
          onClick={() => router.push("/launchapp/settings")}
        >
          <Settings className="mr-2 h-4 w-4" />
          {!isCollapsed && "Settings"}
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "w-full justify-start",
            "transition-all duration-200 ease-in-out",
            "hover:bg-primary/10 hover:text-primary",
            "data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
          )}
          data-active={pathname === "/launchapp/help"}
          onClick={() => router.push("/launchapp/help")}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          {!isCollapsed && "Help"}
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          {!isCollapsed && "Sign Out"}
        </Button>
      </div>
    </div>
  )
}