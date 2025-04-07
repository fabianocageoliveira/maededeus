import type { Metadata } from "next"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Produtos | Mãe de Deus Espaço Católico",
  description: "Explore nossa coleção de artigos religiosos e decorativos",
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Log para debug
  console.log("Página de produtos renderizada com parâmetros:", searchParams)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Produtos", href: "/produtos", active: true },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/4">
          <ProductFilters />
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-playfair font-medium mb-6">Nossos Produtos</h1>
          <ProductGrid searchParams={searchParams} />
        </div>
      </div>
    </div>
  )
}

