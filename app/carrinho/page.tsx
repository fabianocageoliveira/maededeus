import type { Metadata } from "next"
import CartClientPage from "./CartClientPage"

export const metadata: Metadata = {
  title: "Carrinho | Mãe de Deus Espaço Católico",
  description: "Seu carrinho de compras",
}

export default function CartPage() {
  return <CartClientPage />
}

