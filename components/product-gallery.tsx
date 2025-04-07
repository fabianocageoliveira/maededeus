"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="order-2 md:order-1 md:w-1/5 flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-lg overflow-hidden border cursor-pointer flex-shrink-0 w-20 h-20 ${
              selectedImage === index ? "border-rose-600" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - Imagem ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="order-1 md:order-2 md:w-4/5 relative aspect-square rounded-lg overflow-hidden border"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className="w-full h-full relative"
          style={{
            overflow: isZoomed ? "hidden" : "visible",
          }}
        >
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`${productName} - Imagem ${selectedImage + 1}`}
            fill
            className="object-cover transition-transform duration-300"
            style={{
              transform: isZoomed ? "scale(1.5)" : "scale(1)",
              transformOrigin: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : "center center",
            }}
          />
        </div>

        {isZoomed && (
          <div className="absolute top-4 right-4 bg-white bg-opacity-75 text-xs px-2 py-1 rounded">
            Passe o mouse para ampliar
          </div>
        )}
      </div>
    </div>
  )
}

