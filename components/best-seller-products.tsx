"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingCart, Award } from "lucide-react"
import { useState } from "react"
import { useWishlist, type WishlistItem } from "@/hooks/use-wishlist"
import { useCart, type CartItem } from "@/hooks/use-cart"
import NotificationModal from "@/components/notification-modal"

const bestSellerProducts = [
  {
    id: 3,
    name: "Imagem Sagrada Família em Porcelana com Detalhes Dourados",
    price: 120.0,
    sales: 87,
    image: "/imagem-sagrada-familia-dourada-400px",
    href: "/produtos/imagem-sagrada-familia-dourada",
  },
  {
    id: 8,
    name: "Conjunto Nossa Senhora das Graças Azul",
    price: 55.9,
    sales: 76,
    image: "/conjunto-nossa-senhora-azul-400px",
    href: "/produtos/conjunto-nossa-senhora-azul",
  },
  {
    id: 2,
    name: "Caneca Porcelana - Você é Luz",
    price: 45.5,
    sales: 65,
    image: "/divino-mandala-400px",
    href: "/produtos/divino-mandala",
  },
  {
    id: 7,
    name: "Divino Espírito Santo Mandala Decorativo",
    price: 110.0,
    sales: 58,
    image: "/conjunto-anjos-400px",
    href: "/produtos/conjunto-anjosl",
  },
]

export default function BestSellerProducts() {
  const { addToWishlist, isInWishlist } = useWishlist()
  const { addToCart } = useCart()
  const [notification, setNotification] = useState<{
    show: boolean
    type: "success" | "error" | "wishlist" | "cart"
    title: string
    message: string
    actionLink?: string
    actionText?: string
  }>({
    show: false,
    type: "success",
    title: "",
    message: "",
  })

  const handleAddToWishlist = (product: any) => {
    const wishlistItem: WishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      href: product.href,
      stock: "Em estoque",
    }

    const added = addToWishlist(wishlistItem)

    if (added) {
      setNotification({
        show: true,
        type: "wishlist",
        title: "Adicionado aos favoritos",
        message: `${product.name} foi adicionado à sua lista de desejos.`,
        actionLink: "/lista-desejos",
        actionText: "Ver Lista de Desejos",
      })
    } else {
      setNotification({
        show: true,
        type: "error",
        title: "Produto já adicionado",
        message: "Este produto já está na sua lista de desejos.",
        actionLink: "/lista-desejos",
        actionText: "Ver Lista de Desejos",
      })
    }
  }

  const handleAddToCart = (product: any) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    }

    addToCart(cartItem)

    setNotification({
      show: true,
      type: "cart",
      title: "Adicionado ao carrinho",
      message: `${product.name} foi adicionado ao seu carrinho.`,
      actionLink: "/carrinho",
      actionText: "Ver Carrinho",
    })
  }

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }))
  }

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-medium mb-4">Produtos Mais Vendidos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os produtos preferidos de nossos clientes, escolhidos com carinho para abençoar seu lar e sua
            família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerProducts.map((product, index) => (
            <Card key={product.id} className="border-0 shadow-sm overflow-hidden group relative">
              {/* Badge de posição */}
              <div className="absolute top-3 left-3 z-10 bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>

              {/* Badge de mais vendido */}
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <Award className="h-3 w-3 mr-1" />
                  MAIS VENDIDO
                </div>
              </div>

              <Link href={product.href} className="block relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <CardContent className="pt-4">
                <Link href={product.href} className="block">
                  <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-rose-600 font-medium">R$ {product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">{product.sales} unidades vendidas</p>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button className="bg-rose-600 hover:bg-rose-700 flex-1" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`ml-2 ${isInWishlist(product.id) ? "border-rose-600 text-rose-600 bg-rose-50" : ""}`}
                  onClick={() => handleAddToWishlist(product)}
                >
                  <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-rose-600" : ""}`} />
                  <span className="sr-only">Adicionar aos favoritos</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
            <Link href="/produtos">Ver Todos os Produtos</Link>
          </Button>
        </div>
      </div>

      {/* Notification Modal */}
      <NotificationModal
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isOpen={notification.show}
        onClose={closeNotification}
        actionLink={notification.actionLink}
        actionText={notification.actionText}
      />
    </section>
  )
}

