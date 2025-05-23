"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Evitar problemas de hidratação
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Não renderizar nada até que o componente esteja montado
  if (!isMounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-700/20 bg-forest-900/95 backdrop-blur supports-[backdrop-filter]:bg-forest-900/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="New Orleans Barbearia" width={50} height={50} className="h-12 w-auto" />
          <span className="text-xl font-bold text-gold-300">New Orleans Barbearia</span>
        </div>

        {isDesktop ? (
          <nav className="flex items-center gap-6">
            <Link href="#inicio" className="text-sm font-medium transition-colors hover:text-gold-400">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium transition-colors hover:text-gold-400">
              Serviços
            </Link>
            <Link href="#galeria" className="text-sm font-medium transition-colors hover:text-gold-400">
              Galeria
            </Link>
            <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-gold-400">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-gold-400">
              Contato
            </Link>
            <a href="https://tr.ee/Jm7BLJAFJe" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-gold-600 text-forest-900 hover:bg-gold-500">
                Agendar
              </Button>
            </a>
            <ModeToggle />
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {!isDesktop && isMenuOpen && (
        <div className="container pb-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#inicio"
              className="text-sm font-medium transition-colors hover:text-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium transition-colors hover:text-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#galeria"
              className="text-sm font-medium transition-colors hover:text-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium transition-colors hover:text-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium transition-colors hover:text-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a href="https://tr.ee/Jm7BLJAFJe" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="default" className="bg-gold-600 text-forest-900 hover:bg-gold-500 w-full">
                Agendar
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
