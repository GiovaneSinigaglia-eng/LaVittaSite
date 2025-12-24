"use client"

import { useContext } from "react"

import { LanguageContext } from "@/contexts/language-context"

export function useLanguage() {
  const context = useContext(LanguageContext)

  // Durante o SSR ou antes da montagem, retorna valores padrão
  if (!context) {
    return {
      language: "pt" as const,
      setLanguage: () => {},
      t: (key: string) => key,
      translations: {} as Record<string, unknown>,
    }
  }

  return context
}
