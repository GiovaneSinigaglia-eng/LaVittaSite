"use client"

import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react"
import Link from "next/link"

const whatsappNumber = "11988374400"
const message = "Olá! Vim através do site da La Vitta Cosmética."
const encodedMessage = encodeURIComponent(message)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

export default function Footer() {
  return (
    <footer className="border-t border-separator bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Logo e Descrição */}
        <div className="space-y-4">
          <Link href="/" className="mb-4 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
            <span className="text-xl font-bold text-primary sm:text-2xl">La Vitta Cosmética</span>
          </Link>
          <p className="text-sm text-foreground sm:text-base">
            Cuidando da sua beleza natural com produtos de qualidade e ingredientes selecionados.
            Sua satisfação é nossa prioridade.
          </p>
          <div className="flex space-x-4">
            {/* <Link href="#" target="_blank" className="text-foreground transition-colors hover:text-primary">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link> */}
            <Link href="https://www.instagram.com/lavittacosmetica/" target="_blank" className="text-foreground transition-colors hover:text-primary">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">Links Rápidos</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/" className="text-foreground transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/quem-somos"
                className="text-foreground transition-colors hover:text-primary"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/midia" className="text-foreground transition-colors hover:text-primary">
                Mídia
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-foreground transition-colors hover:text-primary"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/trabalhe-conosco"
                className="text-foreground transition-colors hover:text-primary"
              >
                Trabalhe conosco
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">Contato</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex flex-col gap-1 text-foreground sm:flex-row sm:items-center sm:gap-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="whitespace-nowrap">(11) 2796-3162</span>
                <span className="whitespace-nowrap">(11) 2081-4744</span>
              </div>
            </li>
            <li className="flex items-start space-x-2 text-foreground">
              <Mail className="mt-1 h-4 w-4 flex-shrink-0" />
              <span className="break-all">contato@lavittacosmetica.com.br</span>
            </li>
            <li className="flex items-start space-x-2 text-foreground">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
              <span>
                São Paulo, SP
                <br />
                Brasil
              </span>
            </li>
            <li className="flex items-start space-x-2 text-foreground">
              <MessageCircle className="mt-1 h-4 w-4 flex-shrink-0" />
              <a
                href={whatsappUrl}
                target="_blank"
                className="cursor-pointer break-all transition-colors hover:text-primary"
              >
                (11) 98837-4400 - WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 border-t border-separator pt-8 text-center text-xs text-foreground sm:text-sm">
        © {new Date().getFullYear()} La Vitta Cosmética. Todos os direitos reservados.
      </p>
    </footer>
  )
}
