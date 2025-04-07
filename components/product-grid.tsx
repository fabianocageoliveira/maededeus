"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingCart } from "lucide-react"
import { useWishlist, type WishlistItem } from "@/hooks/use-wishlist"
import { useCart, type CartItem } from "@/hooks/use-cart"
import NotificationModal from "@/components/notification-modal"

// Dados de produtos
const allProducts = [
  {
    id: 1,
    name: "Quadro Família - É um presente de Deus",
    price: 89.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/quadro-familia",
    categories: ["decoracao", "presentes"],
    collections: ["familia"],
  },
  {
    id: 2,
    name: "Terço de Madeira com Medalha",
    price: 45.5,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/terco-madeira",
    categories: ["tercos", "presentes"],
    collections: ["nossa-senhora"],
  },
  {
    id: 3,
    name: "Imagem Sagrada Família",
    price: 120.0,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/imagem-sagrada-familia",
    categories: ["imagens", "decoracao"],
    collections: ["sagrada-familia"],
  },
  {
    id: 4,
    name: "Divino Espírito Santo Decorativo",
    price: 75.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/divino-espirito-santo",
    categories: ["decoracao"],
    collections: ["divino-espirito-santo"],
  },
  {
    id: 5,
    name: "Quadro Nossa Senhora",
    price: 95.0,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/quadro-nossa-senhora",
    categories: ["decoracao", "presentes"],
    collections: ["nossa-senhora"],
  },
  {
    id: 6,
    name: "Terço de Parede Decorativo",
    price: 65.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/terco-parede",
    categories: ["tercos", "decoracao"],
    collections: ["nossa-senhora"],
  },
  {
    id: 7,
    name: "Bíblia Sagrada Capa Especial",
    price: 110.0,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/biblia-capa-especial",
    categories: ["livros"],
    collections: [],
  },
  {
    id: 8,
    name: "Crucifixo de Parede",
    price: 55.9,
    image: "/placeholder.svg?height=400&width=400",
    href: "/produtos/crucifixo-parede",
    categories: ["decoracao"],
    collections: [],
  },
  {
    id: 9,
    name: "Família é lugar de Pouso seguro",
    price: 79.9,
    image: "/images/IMG-20250325-WA0025.jpg",
    href: "/produtos/familia-pouso-seguro",
    categories: ["decoracao", "familia"],
    collections: ["familia"],
  },
  {
    id: 10,
    name: "Família é um projeto de Deus",
    price: 85.0,
    image: "/images/IMG-20250325-WA0026.jpg",
    href: "/produtos/familia-projeto-deus",
    categories: ["decoracao", "familia"],
    collections: ["familia"],
  },
  {
    id: 11,
    name: "A nossa Família é um Presente de Deus",
    price: 69.9,
    image: "/images/IMG-20250325-WA0030.jpg",
    href: "/produtos/familia-presente-de-deus",
    categories: ["decoracao", "familia"],
    collections: ["familia"],
  },
  {
    id: 12,
    name: "Aqui mora uma Família abençoada",
    price: 59.9,
    image: "/images/IMG-20250325-WA0028.jpg",
    href: "/produtos/familia-abencoada",
    categories: ["decoracao", "familia"],
    collections: ["familia"],
  },
  {
    id: 13,
    name: "Divino Espírito Santo com Cruz",
    price: 99.0,
    image: "/images/IMG-20250325-WA0027.jpg",
    href: "/produtos/divino-espirito-santo-cruz",
    categories: ["decoracao", "divino-espirito-santo"],
    collections: ["divino-espirito-santo"],
  },
  {
    id: 14,
    name: "Família é o amor de DEUS",
    price: 75.0,
    image: "/images/IMG-20250325-WA0031.jpg",
    href: "/produtos/familia-amor-de-deus",
    categories: ["decoracao", "familia"],
    collections: ["familia"],
  },
  {
    id: 15,
    name: "Casa abençoada com Coração",
    price: 115.0,
    image: "/images/IMG-20250325-WA0034.jpg",
    href: "/produtos/casa-abencoada-coracao",
    categories: ["decoracao", "casa"],
    collections: ["casa", "familia"],
  },
  {
    id: 16,
    name: "Amém e Deus - porque Deus está neste lugar!",
    price: 69.9,
    image: "/images/IMG-20250325-WA0033.jpg",
    href: "/produtos/deus-esta-neste-lugar",
    categories: ["decoracao"],
    collections: [],
  },
  {
    id: 17,
    name: "Terço de Madeira Rústico",
    price: 39.9,
    image: "/images/IMG-20250325-WA0035.jpg",
    href: "/produtos/terco-madeira-rustico",
    categories: ["tercos"],
    collections: [],
  },
  {
    id: 18,
    name: "Divino Espírito Santo Decorativo",
    price: 89.9,
    image: "/images/IMG-20250325-WA0032.jpg",
    href: "/produtos/divino-espirito-santo-decorativo",
    categories: ["decoracao", "divino-espirito-santo"],
    collections: ["divino-espirito-santo"],
  },
]

interface ProductGridProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductGrid({ searchParams }: ProductGridProps) {
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

  // Usar useMemo para filtrar produtos apenas quando searchParams mudar
  const filteredProducts = useMemo(() => {
    // Log para debug
    console.log("Filtrando produtos com parâmetros:", searchParams)

    let result = [...allProducts]

    // Filtrar por categoria
    const categoriaParam = searchParams.categoria
    if (categoriaParam) {
      const categorias = Array.isArray(categoriaParam) ? categoriaParam : categoriaParam.split(",")
      console.log("Filtrando por categorias:", categorias)

      result = result.filter((product) => product.categories.some((category) => categorias.includes(category)))
    }

    // Filtrar por coleção
    const colecaoParam = searchParams.colecao
    if (colecaoParam) {
      const colecoes = Array.isArray(colecaoParam) ? colecaoParam : colecaoParam.split(",")
      console.log("Filtrando por coleções:", colecoes)

      result = result.filter((product) => product.collections.some((collection) => colecoes.includes(collection)))
    }

    // Filtrar por preço
    const minPriceParam = searchParams.preco_min
    const maxPriceParam = searchParams.preco_max
    if (minPriceParam && maxPriceParam) {
      const minPrice = Number(Array.isArray(minPriceParam) ? minPriceParam[0] : minPriceParam)
      const maxPrice = Number(Array.isArray(maxPriceParam) ? maxPriceParam[0] : maxPriceParam)
      console.log("Filtrando por preço:", minPrice, "a", maxPrice)

      result = result.filter((product) => product.price >= minPrice && product.price <= maxPrice)
    }

    console.log("Produtos filtrados:", result.length, "de", allProducts.length)
    return result
  }, [searchParams?.categoria, searchParams?.colecao, searchParams?.preco_min, searchParams?.preco_max, searchParams])

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
    <div className="space-y-6">
      {/* Contador de resultados */}
      <div className="text-sm text-gray-600">{filteredProducts.length} produto(s) encontrado(s)</div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600 mb-4">Tente ajustar os filtros para encontrar o que você está procurando.</p>
          </div>
        )}
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
    </div>
  )
}

