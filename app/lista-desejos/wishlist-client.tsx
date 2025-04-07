"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ShoppingCart, Trash2, X } from "lucide-react"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

export function WishlistClient() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleClearWishlist = () => {
    if (wishlistItems.length === 0) return

    clearWishlist()
    toast({
      title: "Lista de desejos limpa",
      description: "Todos os itens foram removidos da sua lista de desejos.",
    })
  }

  const handleRemoveItem = (id: number, name: string) => {
    removeFromWishlist(id)
    toast({
      title: "Item removido",
      description: `${name} foi removido da sua lista de desejos.`,
    })
  }

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Sua lista de desejos está vazia</h3>
        <p className="text-gray-600 mb-4">
          Adicione produtos à sua lista de desejos para salvá-los para compras futuras.
        </p>
        <Button asChild className="bg-rose-600 hover:bg-rose-700">
          <Link href="/produtos">Explorar Produtos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Meus Favoritos ({wishlistItems.length})</h2>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-rose-600 border-rose-600 hover:bg-rose-50"
          onClick={handleClearWishlist}
        >
          <Trash2 className="h-4 w-4" />
          Limpar Lista
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Produto</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Disponibilidade</TableHead>
                <TableHead className="w-[150px]">Ações</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishlistItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="w-20 h-20 relative rounded overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link href={item.href} className="font-medium hover:text-rose-600 transition-colors">
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-rose-600 font-medium">R$ {item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.stock}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="bg-rose-600 hover:bg-rose-700 w-full"
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          quantity: 1,
                          image: item.image,
                        })
                        toast({
                          title: "Adicionado ao carrinho",
                          description: `${item.name} foi adicionado ao seu carrinho.`,
                        })
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-500"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remover item</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default WishlistClient

