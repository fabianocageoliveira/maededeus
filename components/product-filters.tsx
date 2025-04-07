"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMobile } from "@/hooks/use-mobile"

const categories = [
  { id: "decoracao", label: "Decoração" },
  { id: "tercos", label: "Terços e Rosários" },
  { id: "imagens", label: "Imagens Sacras" },
  { id: "livros", label: "Livros Religiosos" },
  { id: "presentes", label: "Presentes" },
]

const collections = [
  { id: "sagrada-familia", label: "Sagrada Família" },
  { id: "nossa-senhora", label: "Nossa Senhora" },
  { id: "divino-espirito-santo", label: "Divino Espírito Santo" },
  { id: "sao-jose", label: "São José" },
  { id: "anjos", label: "Anjos" },
]

export default function ProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isMobile = useMobile()

  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedCollections, setSelectedCollections] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Inicializar filtros a partir dos parâmetros da URL
  useEffect(() => {
    if (!searchParams || !isInitialized) return

    const categoriaParam = searchParams.get("categoria")
    const colecaoParam = searchParams.get("colecao")
    const minPriceParam = searchParams.get("preco_min")
    const maxPriceParam = searchParams.get("preco_max")

    // Inicializar categorias
    if (categoriaParam) {
      const categorias = categoriaParam.split(",")
      if (JSON.stringify(categorias) !== JSON.stringify(selectedCategories)) {
        setSelectedCategories(categorias)
        console.log("Categorias inicializadas:", categorias)
      }
    } else if (selectedCategories.length > 0) {
      setSelectedCategories([])
    }

    // Inicializar coleções
    if (colecaoParam) {
      const colecoes = colecaoParam.split(",")
      if (JSON.stringify(colecoes) !== JSON.stringify(selectedCollections)) {
        setSelectedCollections(colecoes)
        console.log("Coleções inicializadas:", colecoes)
      }
    } else if (selectedCollections.length > 0) {
      setSelectedCollections([])
    }

    // Inicializar preço
    if (minPriceParam && maxPriceParam) {
      const minPrice = Number.parseInt(minPriceParam, 10)
      const maxPrice = Number.parseInt(maxPriceParam, 10)
      if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
        setPriceRange([minPrice, maxPrice])
        console.log("Preço inicializado:", minPrice, maxPrice)
      }
    } else if (priceRange[0] !== 0 || priceRange[1] !== 200) {
      setPriceRange([0, 200])
    }

    if (!isInitialized) {
      setIsInitialized(true)
    }
  }, [searchParams, isInitialized, selectedCategories, selectedCollections, priceRange])

  // Alternar seleção de categoria
  const toggleCategory = (categoryId: string) => {
    console.log("Categoria clicada:", categoryId)
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Alternar seleção de coleção
  const toggleCollection = (collectionId: string) => {
    console.log("Coleção clicada:", collectionId)
    setSelectedCollections((prev) =>
      prev.includes(collectionId) ? prev.filter((id) => id !== collectionId) : [...prev, collectionId],
    )
  }

  // Manipular mudança de categoria no select mobile
  const handleCategoryChange = (value: string) => {
    if (value === "todos") {
      setSelectedCategories([])
    } else {
      setSelectedCategories([value])
    }
  }

  // Manipular mudança de coleção no select mobile
  const handleCollectionChange = (value: string) => {
    if (value === "todos") {
      setSelectedCollections([])
    } else {
      setSelectedCollections([value])
    }
  }

  // Aplicar filtros
  const applyFilters = () => {
    console.log("Aplicando filtros:", {
      categorias: selectedCategories,
      colecoes: selectedCollections,
      preco: priceRange,
    })

    // Criar um novo objeto URLSearchParams
    const params = new URLSearchParams()

    // Adicionar categorias selecionadas
    if (selectedCategories.length > 0) {
      params.set("categoria", selectedCategories.join(","))
    }

    // Adicionar coleções selecionadas
    if (selectedCollections.length > 0) {
      params.set("colecao", selectedCollections.join(","))
    }

    // Adicionar intervalo de preço
    if (priceRange[0] > 0 || priceRange[1] < 200) {
      params.set("preco_min", priceRange[0].toString())
      params.set("preco_max", priceRange[1].toString())
    }

    // Navegar para a URL com os parâmetros
    const queryString = params.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname

    // Usar replace em vez de push para evitar problemas de histórico
    router.push(url)
  }

  // Limpar filtros
  const clearFilters = () => {
    console.log("Limpando todos os filtros")
    setSelectedCategories([])
    setSelectedCollections([])
    setPriceRange([0, 200])
    router.push(pathname)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Filtros</h2>
        <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
          Limpar Filtros
        </Button>
      </div>

      {isMobile ? (
        // Versão mobile com selects
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium">Categorias</label>
            <Select
              value={selectedCategories.length > 0 ? selectedCategories[0] : "todos"}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas as categorias</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Coleções</label>
            <Select
              value={selectedCollections.length > 0 ? selectedCollections[0] : "todos"}
              onValueChange={handleCollectionChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma coleção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas as coleções</SelectItem>
                {collections.map((collection) => (
                  <SelectItem key={collection.id} value={collection.id}>
                    {collection.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Preço</label>
            <Slider max={500} step={10} value={priceRange} onValueChange={setPriceRange} />
            <div className="flex items-center justify-between">
              <span className="text-sm">R$ {priceRange[0]}</span>
              <span className="text-sm">R$ {priceRange[1]}</span>
            </div>
          </div>

          <Button className="w-full bg-rose-600 hover:bg-rose-700 mt-4" onClick={applyFilters}>
            Aplicar Filtros
          </Button>
        </div>
      ) : (
        // Versão desktop com accordion e checkboxes
        <Accordion type="multiple" defaultValue={["categories", "collections", "price"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Categorias</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                    />
                    <Label
                      htmlFor={`category-${category.id}`}
                      className="text-sm cursor-pointer"
                      onClick={() => toggleCategory(category.id)}
                    >
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="collections">
            <AccordionTrigger>Coleções</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <div key={collection.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`collection-${collection.id}`}
                      checked={selectedCollections.includes(collection.id)}
                      onCheckedChange={() => toggleCollection(collection.id)}
                    />
                    <Label
                      htmlFor={`collection-${collection.id}`}
                      className="text-sm cursor-pointer"
                      onClick={() => toggleCollection(collection.id)}
                    >
                      {collection.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Preço</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider max={500} step={10} value={priceRange} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">R$ {priceRange[0]}</span>
                  <span className="text-sm">R$ {priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {!isMobile && (
        <Button className="w-full bg-rose-600 hover:bg-rose-700 mt-4" onClick={applyFilters}>
          Aplicar Filtros
        </Button>
      )}
    </div>
  )
}

