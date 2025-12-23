"use client"

import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  message?: string
  className?: string
  variant?: "floating" | "inline"
  size?: "sm" | "md" | "lg"
}

export default function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre os produtos da Giga Cosmética.",
  className = "",
  variant = "floating",
  size = "md",
}: WhatsAppButtonProps) {
  const phoneNumber = "11988374400" // Número da lavitta Cosmética

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (variant === "floating") {
    return (
      <div className={`fixed right-6 bottom-6 z-50 ${className}`}>
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 animate-pulse rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:animate-none hover:bg-green-600 hover:shadow-xl"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 text-white hover:bg-green-600 ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      WhatsApp
    </Button>
  )
}
