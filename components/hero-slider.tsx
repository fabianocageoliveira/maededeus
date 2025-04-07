"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Dados do slider
const sliderData = [
  {
    id: 1,
    title: "Mãe de Deus Espaço Católico",
    subtitle: "Decoração com Fé",
    description:
      "Artigos religiosos e decorativos para trazer mais fé, amor e espiritualidade para o seu lar e sua família.",
    buttonText: "Explorar Produtos",
    buttonLink: "/produtos",
    secondaryButtonText: "Conheça Nossa História",
    secondaryButtonLink: "/sobre",
    image: "/placeholder.svg?height=800&width=1600",
    bgColor: "bg-rose-50",
  },
  {
    id: 2,
    title: "Presentes Especiais",
    subtitle: "Para Momentos Únicos",
    description: "Encontre o presente perfeito para celebrar momentos importantes na vida espiritual de quem você ama.",
    buttonText: "Ver Presentes",
    buttonLink: "/produtos?categoria=presentes",
    secondaryButtonText: "Datas Especiais",
    secondaryButtonLink: "/blog",
    image: "/placeholder.svg?height=800&width=1600",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Imagens Sacras",
    subtitle: "Beleza e Devoção",
    description:
      "Conheça nossa coleção de imagens sacras, cuidadosamente selecionadas para inspirar sua fé e decorar seu lar.",
    buttonText: "Ver Imagens",
    buttonLink: "/produtos?categoria=imagens",
    secondaryButtonText: "Novidades",
    secondaryButtonLink: "/produtos",
    image: "/placeholder.svg?height=800&width=1600",
    bgColor: "bg-yellow-50",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Função para ir para o próximo slide
  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))

    // Resetar o estado de transição após a animação
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Função para ir para o slide anterior
  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))

    // Resetar o estado de transição após a animação
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Avançar slides automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const slide = sliderData[currentSlide]

  return (
    <section className="relative overflow-hidden">
      {/* Slider */}
      <div
        className={`relative min-h-[500px] md:min-h-[600px] flex items-center ${slide.bgColor} transition-colors duration-500`}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="py-12 md:py-20">
              <span className="text-rose-600 font-medium mb-2 block">{slide.subtitle}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6">{slide.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-rose-600 hover:bg-rose-700">
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={slide.secondaryButtonLink}>{slide.secondaryButtonText}</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('/images/hero-pattern.png')] bg-cover opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-200 rounded-full -mb-16 -mr-16 opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-16 h-16 bg-rose-200 rounded-full -mt-8 opacity-30"></div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 rounded-full p-2 shadow-md transition-all duration-200 z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 rounded-full p-2 shadow-md transition-all duration-200 z-20"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-rose-600 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

