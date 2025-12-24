"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import logoLavitta from "@/public/logo_lavitta.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/quem-somos", label: t("nav.about") },
    { href: "/midia", label: t("nav.media") },
    { href: "/contato", label: t("nav.contact") },
    { href: "/trabalhe-conosco", label: t("nav.careers") },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-separator bg-background shadow-sm">
      <div className="flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 md:h-28 md:px-8 lg:px-16 xl:px-32">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src={logoLavitta}
            alt={t("nav.logoAlt")}
            width={300}
            height={300}
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
            priority
          />
          <span className="hidden text-xs font-semibold tracking-wide text-primary lg:block lg:text-sm xl:text-base">
            {t("nav.tagline")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-4 md:flex lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold text-foreground transition-colors duration-200 hover:text-primary lg:text-base"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="border-0 text-foreground"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="space-y-2 border-t border-separator bg-background px-4 py-3 shadow-inner md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 font-extrabold text-foreground transition-colors duration-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
