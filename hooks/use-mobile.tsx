"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se a tela é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Verificar inicialmente
    checkMobile()

    // Adicionar event listener para redimensionamento
    window.addEventListener("resize", checkMobile)

    // Limpar event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

