"use client"

import React, { createContext, useCallback, useEffect, useState } from "react"

import enTranslations from "@/locales/en.json"
import esTranslations from "@/locales/es.json"
import ptTranslations from "@/locales/pt.json"

export type Language = "pt" | "en" | "es"

type Translations = typeof ptTranslations

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "la-vitta-language"

const translationsMap: Record<Language, Translations> = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
}

// Detecta o idioma do navegador
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "pt"

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith("pt")) return "pt"
  if (browserLang.startsWith("es")) return "es"
  return "en" // fallback
}

// Obtém o idioma salvo ou detecta automaticamente
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt"

  const saved = localStorage.getItem(STORAGE_KEY) as Language | null
  if (saved && ["pt", "en", "es"].includes(saved)) {
    return saved
  }

  return detectBrowserLanguage()
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  // Inicializa o idioma apenas no cliente
  useEffect(() => {
    setMounted(true)
    const initialLang = getInitialLanguage()
    setLanguageState(initialLang)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang)
    }
  }, [])

  // Função para acessar traduções aninhadas via dot notation
  const t = useCallback(
    (key: string): string => {
      const translations = translationsMap[language]
      const keys = key.split(".")
      let value: unknown = translations

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key // Retorna a chave se não encontrar
        }
      }

      return typeof value === "string" ? value : key
    },
    [language],
  )

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translationsMap[language],
  }

  // Evita hidratação de conteúdo diferente entre servidor e cliente
  if (!mounted) {
    return <>{children}</>
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
