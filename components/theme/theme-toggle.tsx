import { useCallback } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useThemeStore } from "@/lib/stores/theme-store"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { setTheme: setStoreTheme } = useThemeStore()

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setStoreTheme(newTheme)
  }, [theme, setTheme, setStoreTheme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 cursor-pointer hover:bg-accent hover:text-accent-foreground"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}