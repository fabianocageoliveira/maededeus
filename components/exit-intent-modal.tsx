"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { X } from "lucide-react"

interface ExitIntentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu e-mail para receber o cupom.",
        variant: "destructive",
      })
      return
    }

    // Simulação de envio do cupom
    toast({
      title: "Cupom enviado!",
      description: "Seu cupom de desconto foi enviado para o seu e-mail.",
    })

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Button>
          <DialogTitle className="text-center text-2xl font-playfair text-rose-600">Oferta Especial!</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Não vá embora ainda! Temos uma oferta exclusiva para você.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative aspect-square w-full max-w-[200px] mx-auto md:max-w-none">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Oferta especial"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-sm font-bold rounded-full w-14 h-14 flex items-center justify-center transform rotate-12">
              15% OFF
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Ganhe 15% de desconto no seu primeiro pedido!</h3>
            <p className="text-sm text-gray-600">
              Inscreva-se para receber nosso cupom exclusivo e aproveite 15% de desconto em qualquer produto de nossa
              loja.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Seu melhor e-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                Quero meu cupom de 15%
              </Button>

              <p className="text-xs text-center text-gray-500">
                Ao se inscrever, você concorda em receber e-mails promocionais. Você pode cancelar a inscrição a
                qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

