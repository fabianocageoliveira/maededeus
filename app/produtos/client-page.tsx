"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import Breadcrumb from "@/components/breadcrumb"

export default function ProductsClientPage() {
  const searchParams = useSearchParams()

  // Convert searchParams to a plain object
  const searchParamsObject: { [key: string]: string | string[] } = {}
  searchParams.forEach((value, key) => {
    if (searchParamsObject[key]) {
      if (Array.isArray(searchParamsObject[key])) {
        ;(searchParamsObject[key] as string[]).push(value)
      } else {
        searchParamsObject[key] = [searchParamsObject[key] as string, value]
      }
    } else {
      searchParamsObject[key] = value
    }
  })

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
          <Suspense fallback={<div className="p-4 border rounded-md">Carregando filtros...</div>}>
            <ProductFilters />
          </Suspense>
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-playfair font-medium mb-6">Nossos Produtos</h1>
          <Suspense fallback={<div className="p-4 border rounded-md">Carregando produtos...</div>}>
            <ProductGrid searchParams={searchParamsObject} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

