import type { Metadata } from "next"
import ProductsClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Produtos | Mãe de Deus Espaço Católico",
  description: "Explore nossa coleção de artigos religiosos e decorativos",
}

export default function ProductsPage() {
  return <ProductsClientPage />
}

