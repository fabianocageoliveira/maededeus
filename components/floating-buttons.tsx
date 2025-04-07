"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Função para calcular o progresso da rolagem
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = scrollTop / docHeight
    setScrollProgress(scrollPercent)

    // Mostrar o botão "Voltar ao topo" apenas quando o usuário rolar mais de 300px
    setShowScrollTop(scrollTop > 300)
  }

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Adicionar event listener para o evento de scroll e configurar a visibilidade inicial
  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress)

    // Definir visibilidade após um pequeno atraso para criar efeito de entrada
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Limpar o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", calculateScrollProgress)
      clearTimeout(timer)
    }
  }, [])

  // Calcular o comprimento da circunferência para o SVG
  const circleRadius = 46
  const circumference = 2 * Math.PI * circleRadius

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Botão do WhatsApp com o ícone correto */}
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Mãe%20de%20Deus%20Espaço%20Católico."
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
        aria-label="Contato via WhatsApp"
        style={{ transitionDelay: "0.1s" }}
      >
        {/* Ícone do WhatsApp (SVG personalizado) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Botão Voltar ao Topo com barra de progresso circular animada */}
      {showScrollTop && (
        <div className="relative">
          {/* Círculo de progresso */}
          <svg className="absolute inset-0 w-14 h-14 rotate-[-90deg]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={circleRadius} fill="none" stroke="#f9f9f9" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r={circleRadius}
              fill="none"
              stroke="#e11d48"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - scrollProgress)}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>

          <Button
            onClick={scrollToTop}
            className={`relative bg-white text-rose-600 hover:bg-rose-50 rounded-full w-14 h-14 p-0 shadow-lg transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
            aria-label="Voltar ao topo"
            style={{ transitionDelay: "0.2s" }}
          >
            <ArrowUp size={24} />
          </Button>
        </div>
      )}
    </div>
  )
}

