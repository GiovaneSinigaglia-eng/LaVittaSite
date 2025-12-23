"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

export function ThemeQuickSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-1/2 right-0 z-30 flex -translate-y-1/2 flex-col gap-2 rounded-l-xl border border-r-0 border-foreground/95 bg-background/95 p-2 shadow-lg">
      <button
        onClick={() => setTheme("light")}
        className={`light rounded-lg p-2 ${
          theme !== "dark"
            ? "bg-primary/15 text-primary"
            : "text-background hover:bg-background hover:text-foreground"
        }`}
        title="Modo Claro"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`dark rounded-lg p-2 ${
          theme === "dark"
            ? "bg-primary/15 text-primary"
            : "text-background hover:bg-background hover:text-foreground"
        }`}
        title="Modo Escuro"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  )
}
