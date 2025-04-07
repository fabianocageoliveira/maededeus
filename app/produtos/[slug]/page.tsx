"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumb from "@/components/breadcrumb"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"
import RecentlyViewedProducts from "@/components/recently-viewed-products"
import ProductImageGallery from "@/components/product-image-gallery"
import { Heart, ShoppingCart, Star, Truck, RefreshCw, Shield, Share2 } from "lucide-react"
import { useWishlist, type WishlistItem } from "@/hooks/use-wishlist"
import { useCart, type CartItem } from "@/hooks/use-cart"
import NotificationModal from "@/components/notification-modal"

// Modificar a importação para garantir que os dados sejam carregados corretamente
import { products } from "./products-data"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]
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

  if (!product) {
    notFound()
  }

  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const shareProduct = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        .catch((error) => console.log("Erro ao compartilhar:", error))
    } else {
      alert("Compartilhamento não suportado neste navegador. Copie o link e compartilhe manualmente.")
    }
  }

  const handleAddToWishlist = () => {
    if (!product) return

    const wishlistItem: WishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      href: `/produtos/${product.slug}`,
      stock: product.stock > 0 ? "Em estoque" : "Fora de estoque",
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
      quantity: quantity,
      image: product.images[0],
    }

    addToCart(cartItem)

    setNotification({
      show: true,
      type: "cart",
      title: "Adicionado ao carrinho",
      message: `${quantity} unidade(s) de ${product.name} foi adicionado ao seu carrinho.`,
      actionLink: "/carrinho",
      actionText: "Ver Carrinho",
    })
  }

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Produtos", href: "/produtos" },
          { label: product.name, href: `/produtos/${product.slug}`, active: true },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Product Images */}
        <ProductImageGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-playfair font-medium mb-2">{product.name}</h1>

          <div className="flex items-center space-x-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviewCount} avaliações)</span>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl font-medium text-rose-600">R$ {product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <>
                <span className="text-gray-500 line-through">R$ {product.oldPrice.toFixed(2)}</span>
                <span className="bg-rose-100 text-rose-600 text-xs font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                {product.stock > 0 ? `Em estoque (${product.stock} unidades)` : "Fora de estoque"}
              </span>
            </div>
            <div className="text-sm text-gray-600">SKU: {product.sku}</div>
          </div>

          <div className="flex flex-col space-y-4 mb-8">
            {/* Quantity selector and buttons in a row */}
            <div className="grid grid-cols-12 gap-2">
              {/* Quantity selector */}
              <div className="col-span-3 flex items-center border rounded-md">
                <button type="button" className="py-2 px-3 text-gray-600 hover:bg-gray-100" onClick={decreaseQuantity}>
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button type="button" className="py-2 px-3 text-gray-600 hover:bg-gray-100" onClick={increaseQuantity}>
                  +
                </button>
              </div>

              {/* Action buttons */}
              <Button className="col-span-6 bg-rose-600 hover:bg-rose-700" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Carrinho
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`col-span-1 h-10 w-10 ${isInWishlist(product.id) ? "border-rose-600 text-rose-600 bg-rose-50" : "border-rose-600 text-rose-600 hover:bg-rose-50"}`}
                onClick={handleAddToWishlist}
              >
                <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-rose-600" : ""}`} />
                <span className="sr-only">Favoritos</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="col-span-1 h-10 w-10 border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={shareProduct}
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartilhar</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-rose-600" />
              <span className="text-sm">Frete grátis acima de R$150</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="h-5 w-5 text-rose-600" />
              <span className="text-sm">30 dias para troca</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-rose-600" />
              <span className="text-sm">Compra segura</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Compartilhar:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pinterest"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="description" className="text-base">
              Descrição
            </TabsTrigger>
            <TabsTrigger value="details" className="text-base">
              Detalhes
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-base">
              Avaliações ({product.reviewCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="py-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="details" className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Especificações</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Dimensões</td>
                      <td className="py-2">{product.dimensions}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Material</td>
                      <td className="py-2">{product.material}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Peso</td>
                      <td className="py-2">{product.weight}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">SKU</td>
                      <td className="py-2">{product.sku}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Informações Adicionais</h3>
                <p className="mb-4">{product.details}</p>
                <p className="text-sm text-gray-600">
                  * As cores podem variar ligeiramente devido às configurações do monitor.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="py-6">
            <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviewCount} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} categories={product.categories} />

      {/* Recently Viewed Products */}
      <RecentlyViewedProducts currentProductId={product.id} />

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

