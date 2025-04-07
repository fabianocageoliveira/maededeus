"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import Breadcrumb from "@/components/breadcrumb"
import { XIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import ExitIntentModal from "@/components/exit-intent-modal"

export default function CartClientPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [showExitModal, setShowExitModal] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Calcular frete
  const shipping = cartTotal > 0 && cartTotal < 150 ? 15.9 : 0
  const total = cartTotal + shipping

  // Função para aumentar a quantidade de um item
  const increaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) {
      updateQuantity(id, item.quantity + 1)
    }
  }

  // Função para diminuir a quantidade de um item
  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1)
    }
  }

  // Função para remover um item do carrinho
  const handleRemoveItem = (id: number) => {
    removeFromCart(id)
    toast({
      title: "Item removido",
      description: "O item foi removido do seu carrinho.",
    })
  }

  // Função para aplicar cupom
  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira um código de cupom.",
        variant: "destructive",
      })
      return
    }

    // Simulação de aplicação de cupom
    toast({
      title: "Cupom aplicado",
      description: `O cupom "${couponCode}" foi aplicado com sucesso.`,
    })
  }

  // Função para atualizar o carrinho
  const updateCart = () => {
    setIsUpdating(true)

    // Simulação de atualização do carrinho
    setTimeout(() => {
      toast({
        title: "Carrinho atualizado",
        description: "Seu carrinho foi atualizado com sucesso.",
      })
      setIsUpdating(false)
    }, 800)
  }

  // Função para enviar orçamento
  const sendQuote = () => {
    toast({
      title: "Orçamento enviado",
      description: "Seu orçamento foi enviado com sucesso. Entraremos em contato em breve.",
    })
    setHasInteracted(true)
  }

  // Modificar a função sendWhatsAppQuote para incluir imagens dos produtos
  const sendWhatsAppQuote = () => {
    // Número de telefone da loja (substitua pelo número correto)
    const phoneNumber = "5511999999999"

    // Criar a mensagem com os itens do carrinho
    let message = "Olá! Gostaria de fazer um orçamento e formas de pagamento para os seguintes itens:\n\n"

    // Mapear os slugs dos produtos com base nos IDs
    const productSlugs: Record<number, string> = {
      1: "quadro-familia",
      2: "terco-madeira",
      3: "imagem-sagrada-familia",
      4: "divino-espirito-santo",
      5: "quadro-nossa-senhora",
      6: "terco-parede",
      7: "biblia-capa-especial",
      8: "crucifixo-parede",
      9: "familia-pouso-seguro",
      10: "familia-projeto-deus",
      11: "familia-presente-de-deus",
      12: "familia-abencoada",
      13: "divino-espirito-santo-cruz",
      14: "familia-amor-de-deus",
      15: "casa-abencoada-coracao",
      16: "deus-esta-neste-lugar",
      17: "terco-madeira-rustico",
      18: "divino-espirito-santo-decorativo",
    }

    cartItems.forEach((item) => {
      const productSlug = productSlugs[item.id] || `produto-${item.id}`
      const productUrl = `${window.location.origin}/produtos/${productSlug}`

      message += `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)}), link do produto: ${productUrl}\n`
    })

    message += `\nSubtotal: R$ ${cartTotal.toFixed(2)}`
    message += `\nFrete: ${shipping > 0 ? `R$ ${shipping.toFixed(2)}` : "Grátis"}`
    message += `\nTotal: R$ ${total.toFixed(2)}`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir o WhatsApp com a mensagem
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")

    setHasInteracted(true)

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será redirecionado para o WhatsApp para enviar seu orçamento.",
    })
  }

  // Detectar quando o usuário tenta sair da página
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse sair pela parte superior da página e o usuário não interagiu (enviou orçamento)
      // e há itens no carrinho, mostrar o modal
      if (e.clientY <= 0 && !hasInteracted && cartItems.length > 0) {
        setShowExitModal(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasInteracted, cartItems.length])

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Carrinho", href: "/carrinho", active: true },
        ]}
      />

      <h1 className="text-3xl font-playfair font-medium mt-8 mb-6">Seu Carrinho</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Produto</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="w-20 h-20 relative rounded overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{item.name}</div>
                        </TableCell>
                        <TableCell>R$ {item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center border rounded-md w-28">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              <MinusIcon className="h-4 w-4" />
                              <span className="sr-only">Diminuir quantidade</span>
                            </Button>
                            <span className="flex-1 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <PlusIcon className="h-4 w-4" />
                              <span className="sr-only">Aumentar quantidade</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>R$ {(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Remover item</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Código do cupom"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
              <Button variant="outline" onClick={applyCoupon}>
                Aplicar Cupom
              </Button>
              <Button variant="outline" onClick={updateCart} disabled={isUpdating}>
                {isUpdating ? "Atualizando..." : "Atualizar Carrinho"}
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>{shipping > 0 ? `R$ ${shipping.toFixed(2)}` : "Grátis"}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-gray-500">Frete grátis para compras acima de R$ 150,00</div>
                )}
                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </CardContent>
              {/* Substituir o CardFooter com apenas um botão */}
              <CardFooter>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2 text-white"
                  onClick={sendWhatsAppQuote}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Enviar Orçamento via WhatsApp
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6">
              <Link href="/produtos" className="flex items-center text-rose-600 hover:text-rose-700">
                <ShoppingBagIcon className="mr-2 h-4 w-4" />
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
            <ShoppingBagIcon className="h-8 w-8 text-rose-600" />
          </div>
          <h2 className="text-2xl font-medium mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-6">Parece que você ainda não adicionou nenhum item ao seu carrinho.</p>
          <Button asChild className="bg-rose-600 hover:bg-rose-700">
            <Link href="/produtos">Explorar Produtos</Link>
          </Button>
        </div>
      )}

      {/* Modal de oferta especial quando o usuário tenta sair */}
      <ExitIntentModal isOpen={showExitModal} onClose={() => setShowExitModal(false)} />
    </div>
  )
}

