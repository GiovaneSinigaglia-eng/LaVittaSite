import "./globals.css"

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
// import WhatsAppFloating from "@/components/whatsapp-floating"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "La Vitta Cosmética",
  description:
    "Descubra os melhores cosméticos para cuidar da sua beleza natural. Produtos de qualidade para cabelos, pele e tratamentos especiais.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          <Analytics />
          {children}
        </main>
        <Footer />

        {/**/}
        {/* vamos deixar sem o WhatsApp por enquanto */}
        {/* adicionar o WhatsApp Floating depois */}
        {/**/}
        {/* <WhatsAppFloating /> */}
      </body>
    </html>
  )
}
