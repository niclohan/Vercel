"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === "undefined") {
      return
    }

    // Verificar se matchMedia é suportado
    if (typeof window.matchMedia !== "function") {
      console.warn("matchMedia não é suportado neste navegador")
      return
    }

    const media = window.matchMedia(query)

    // Definir o estado inicial
    setMatches(media.matches)

    // Criar função de listener
    const listener = () => setMatches(media.matches)

    // Usar addEventListener com fallback para older browsers
    if (media.addEventListener) {
      media.addEventListener("change", listener)
      return () => media.removeEventListener("change", listener)
    } else {
      // Fallback para browsers mais antigos
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}
