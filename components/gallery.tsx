"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const galleryItems = [
  {
    src: "/gallery/barba-ozonio.png",
    alt: "Tratamento de barba com ozônio",
  },
  {
    src: "/gallery/interior-barbearia-1.png",
    alt: "Interior da barbearia New Orleans",
  },
  {
    src: "/gallery/barba-navalha.png",
    alt: "Barba feita com navalha tradicional",
  },
  {
    src: "/gallery/salao-completo.png",
    alt: "Visão do salão da barbearia",
  },
  {
    src: "/gallery/interior-barbearia-2.png",
    alt: "Ambiente sofisticado da barbearia",
  },
  {
    src: "/gallery/equipe-new-orleans.png",
    alt: "Equipe da New Orleans Barbearia",
  },
  {
    src: "/gallery/area-lazer.png",
    alt: "Área de lazer com mesa de sinuca",
  },
  {
    src: "/gallery/area-espera.png",
    alt: "Área de espera com sofá confortável",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  const openModal = (src: string, alt: string) => {
    setSelectedImage(src)
    setSelectedAlt(alt)
    // Usar try/catch para evitar erros com document no SSR
    try {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden"
      }
    } catch (error) {
      console.error("Error setting overflow style:", error)
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
    // Usar try/catch para evitar erros com document no SSR
    try {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto"
      }
    } catch (error) {
      console.error("Error resetting overflow style:", error)
    }
  }

  return (
    <section id="galeria" className="py-16 bg-forest-800">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gold-300 sm:text-4xl">Galeria</h2>
          <p className="mt-4 text-lg text-gold-100/70">Conheça nosso ambiente e alguns dos nossos trabalhos</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-transparent shadow-lg">
              <CardContent className="p-0">
                <div
                  className="relative aspect-square overflow-hidden rounded-lg border-2 border-gold-700/30 cursor-pointer"
                  onClick={() => openModal(item.src, item.alt)}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para visualização em tela cheia */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </button>
            <div className="relative w-full h-full aspect-auto">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={selectedAlt}
                fill
                quality={100}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
