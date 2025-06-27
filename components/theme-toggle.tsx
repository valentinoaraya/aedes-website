"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Theme } from "@/hooks/use-theme"

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className={`relative w-10 h-10 rounded-full transition-colors ${theme === "dark" ?
        "hover:bg-gray-100 text-grey-400" :
        "hover:bg-gray-100 text-gray-600"
        }`
      }
    >
      <Sun className={`h-4 w-4 transition-all ${theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon
        className={`absolute h-4 w-4 transition-all ${theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
