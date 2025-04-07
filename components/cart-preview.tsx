"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { X } from "lucide-react"

export default function CartPreview({ children }: { children: React.ReactNode }) {
  const { cartItems, cartTotal, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (previewRef.current && !previewRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={previewRef}>
      <div className="cursor-pointer relative" onMouseEnter={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && cartItems.length > 0 && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">
              Meu Carrinho ({cartItems.reduce((total, item) => total + item.quantity, 0)} itens)
            </h3>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {cartItems.length > 0 ? (
              <ul className="divide-y">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 flex items-start gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-rose-600">
                          {item.quantity} x R$ {item.price.toFixed(2)}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFromCart(item.id)
                          }}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">Seu carrinho está vazio</div>
            )}
          </div>

          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-medium">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700" onClick={() => setIsOpen(false)}>
                <Link href="/carrinho">Ver Carrinho</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

