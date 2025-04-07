"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useWishlist, type WishlistItem } from "@/hooks/use-wishlist"
import { useCart, type CartItem } from "@/hooks/use-cart"
import NotificationModal from "@/components/notification-modal"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    href: string
    slug?: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
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

  const handleAddToWishlist = () => {
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

  const handleAddToCart = () => {
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
    <>
      <Card className="border-0 shadow-sm overflow-hidden group">
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
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <Button className="bg-rose-600 hover:bg-rose-700 flex-1" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`ml-2 ${isInWishlist(product.id) ? "border-rose-600 text-rose-600 bg-rose-50" : ""}`}
            onClick={handleAddToWishlist}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-rose-600" : ""}`} />
            <span className="sr-only">Adicionar aos favoritos</span>
          </Button>
        </CardFooter>
      </Card>

      <NotificationModal
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isOpen={notification.show}
        onClose={closeNotification}
        actionLink={notification.actionLink}
        actionText={notification.actionText}
      />
    </>
  )
}

