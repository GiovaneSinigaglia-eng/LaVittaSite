"use client"

import { Globe } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Language } from "@/contexts/language-context"
import { useLanguage } from "@/hooks/use-language"

const languages = [
  { code: "pt" as Language, label: "PT", flag: "🇧🇷", name: "Português" },
  { code: "en" as Language, label: "EN", flag: "🇺🇸", name: "English" },
  { code: "es" as Language, label: "ES", flag: "🇪🇸", name: "Español" },
]

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-muted gap-2 transition-all duration-200 hover:border-primary"
          aria-label={t("language.select")}
        >
          <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
          <span className="hidden font-bold sm:inline">{currentLanguage?.label}</span>
          <span className="font-bold sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
            className={`cursor-pointer gap-2 ${
              language === lang.code ? "bg-primary/10 font-bold" : ""
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
