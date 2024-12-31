"use client"

import { useRouter, usePathname } from "next/navigation"
import { Bell, Search, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TopNav() {
  const router = useRouter()
  const pathname = usePathname()
  const handleProfileClick = () => router.push("/launchapp/profile")
  const handleLogoClick = () => {
    if (pathname.startsWith('/launchapp')) {
      router.push('/')
    }
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold hover:text-primary transition-colors"
          >
            Xariabase
          </button>
          <Badge variant="secondary" className="ml-2">
            Credit Score: 850
          </Badge>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects, scholars, or help topics..." className="pl-8" />
          </div>
          <Button onClick={() => router.push("/launchapp/projects/new")}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-8 w-8 rounded-full"
              >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfileClick}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}