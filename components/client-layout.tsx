"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { LanguageProvider } from "@/contexts/language-context"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <div className="sticky top-0 z-50 h-20 w-full border-b bg-background sm:h-24 md:h-28" />
        <main className="min-h-screen">
          <Analytics />
          {children}
        </main>
        <div className="h-20 w-full bg-background" />
      </>
    )
  }

  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen">
        <Analytics />
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  )
}
