"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface BarberIconProps {
  icon: string
  style: React.CSSProperties
}

const icons = ["✂️", "💈", "🪒"]

export default function BarberBackground() {
  const [barberIcons, setBarberIcons] = useState<BarberIconProps[]>([])

  useEffect(() => {
    // Criar ícones apenas no cliente para evitar problemas de hidratação
    const generateIcons = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const iconCount = Math.floor((windowWidth * windowHeight) / 25000) // Ajustar densidade com base no tamanho da tela

      const newIcons: BarberIconProps[] = []

      for (let i = 0; i < iconCount; i++) {
        newIcons.push({
          icon: icons[Math.floor(Math.random() * icons.length)],
          style: {
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 16}px`, // Tamanho entre 16px e 32px
            opacity: 0.05,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 0,
          },
        })
      }

      setBarberIcons(newIcons)
    }

    generateIcons()

    // Regenerar ícones quando a janela for redimensionada
    window.addEventListener("resize", generateIcons)

    return () => {
      window.removeEventListener("resize", generateIcons)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {barberIcons.map((icon, index) => (
        <div key={index} style={icon.style}>
          {icon.icon}
        </div>
      ))}
    </div>
  )
}
