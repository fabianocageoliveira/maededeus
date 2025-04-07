"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingCart, Clock } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Simulação de produtos vistos recentemente
const recentlyViewedProductsData = [
  {
    id: 5,
    name: "Quadro Nossa Senhora",
    price: 95.0,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/quadro-nossa-senhora",
  },
  {
    id: 6,
    name: "Terço de Parede Decorativo",
    price: 65.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/terco-parede",
  },
  {
    id: 1,
    name: "Quadro Família - É um presente de Deus",
    price: 89.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/quadro-familia",
  },
  {
    id: 4,
    name: "Divino Espírito Santo Decorativo",
    price: 75.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/divino-espirito-santo",
  },
]

interface RecentlyViewedProductsProps {
  currentProductId: number
}

export default function RecentlyViewedProducts({ currentProductId }: RecentlyViewedProductsProps) {
  const [products, setProducts] = useState<typeof recentlyViewedProductsData>([])

  useEffect(() => {
    // Filtrar o produto atual da lista de produtos vistos recentemente
    const filteredProducts = recentlyViewedProductsData.filter((product) => product.id !== currentProductId).slice(0, 4)
    setProducts(filteredProducts)

    // Em uma implementação real, aqui você adicionaria o produto atual ao histórico
    // e recuperaria os produtos vistos recentemente do localStorage ou de uma API
  }, [currentProductId])

  // Se não houver produtos para mostrar, não renderiza o componente
  if (products.length === 0) return null

  const addToCart = (productName: string) => {
    toast({
      title: "Produto adicionado",
      description: `${productName} foi adicionado ao carrinho.`,
    })
  }

  const addToWishlist = (productName: string) => {
    toast({
      title: "Produto adicionado aos favoritos",
      description: `${productName} foi adicionado à sua lista de desejos.`,
    })
  }

  return (
    <section className="mt-16 border-t pt-16">
      <h2 className="text-2xl font-playfair font-medium mb-8 flex items-center">
        <Clock className="mr-2 h-5 w-5 text-rose-600" />
        Produtos Vistos Recentemente
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-0 shadow-sm overflow-hidden group">
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
              <Button className="bg-rose-600 hover:bg-rose-700 flex-1" onClick={() => addToCart(product.name)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
              <Button variant="outline" size="icon" className="ml-2" onClick={() => addToWishlist(product.name)}>
                <Heart className="h-4 w-4" />
                <span className="sr-only">Adicionar aos favoritos</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

