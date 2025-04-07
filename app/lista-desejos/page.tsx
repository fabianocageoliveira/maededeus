import type { Metadata } from "next"
import WishlistClient from "./wishlist-client"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Lista de Desejos | Mãe de Deus Espaço Católico",
  description: "Seus produtos favoritos",
}

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Lista de Desejos", href: "/lista-desejos", active: true },
        ]}
      />

      <h1 className="text-3xl font-playfair font-medium mt-8 mb-6">Minha Lista de Desejos</h1>

      <WishlistClient />
    </div>
  )
}

