"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleScrollToServices = () => {
    try {
      const servicesSection = document.getElementById("servicos")
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Error scrolling to services:", error)
    }
  }

  return (
    <section id="inicio" className="relative bg-forest-900">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-900/90 via-forest-900/70 to-forest-900/90">
        <Image
          src="/gallery/interior-panoramico.png"
          alt="Barbearia"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover mix-blend-overlay opacity-30"
          priority
        />
      </div>
      <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center text-center py-24 md:py-32">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gold-300 sm:text-5xl md:text-6xl">
          New Orleans Barbearia
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gold-100/80 sm:text-xl">
          Cortes tradicionais e modernos para homens que valorizam estilo e tradição
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="https://tr.ee/Jm7BLJAFJe" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold-600 text-forest-900 hover:bg-gold-500">
              Agendar Horário
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-gold-600 text-gold-300 hover:bg-gold-900/20"
            onClick={handleScrollToServices}
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  )
}
