"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-rose-600 text-white py-2 relative">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>
          Frete grátis para compras acima de R$ 150,00!{" "}
          <Link href="/produtos" className="underline font-medium">
            Compre agora
          </Link>
        </p>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={() => setIsVisible(false)}
          aria-label="Fechar anúncio"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

