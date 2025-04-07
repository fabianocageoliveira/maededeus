"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, User, Menu, Heart, X, MapPin, Phone, Mail } from "lucide-react"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import CartPreview from "@/components/cart-preview"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { wishlistCount } = useWishlist()
  const { cartCount } = useCart()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-16 w-40 md:w-48">
              <Image
                src="/images/logo.png"
                alt="Mãe de Deus Espaço Católico"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                  pathname === item.href ? "text-rose-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-0 w-60 md:w-72 flex items-center">
                  <Input type="search" placeholder="Buscar produtos..." className="pr-8" autoFocus />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Fechar busca</span>
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} aria-label="Buscar">
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Account */}
            <Button variant="ghost" size="icon" asChild aria-label="Minha conta" className="hidden sm:flex">
              <Link href="/minha-conta">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" asChild aria-label="Lista de desejos" className="hidden sm:flex">
              <Link href="/lista-desejos" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Cart with Preview */}
            <CartPreview>
              <Button variant="ghost" size="icon" asChild aria-label="Carrinho">
                <Link href="/carrinho" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </Button>
            </CartPreview>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm flex flex-col h-full">
                <div className="flex flex-col h-full overflow-hidden">
                  <div className="py-4 border-b flex-shrink-0">
                    <Link href="/" className="flex justify-center mb-6">
                      <div className="relative h-20 w-48">
                        <Image
                          src="/images/logo.png"
                          alt="Mãe de Deus Espaço Católico"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/minha-conta" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Minha Conta
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/lista-desejos" className="flex items-center gap-2">
                          <Heart className="h-4 w-4" />
                          Favoritos
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Add a scrollable container for the menu content */}
                  <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent py-2">
                    <nav className="flex flex-col space-y-4 mt-6 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`text-base font-medium transition-colors hover:text-rose-600 px-2 py-1 ${
                            pathname === item.href ? "text-rose-600 bg-rose-50 rounded-md" : "text-gray-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    {/* Linha horizontal e informações de contato */}
                    <hr className="my-6 border-gray-200" />

                    <div className="space-y-4 px-2 mb-6">
                      <h3 className="font-medium text-gray-700">Contato</h3>

                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-700">(11) 9999-9999</p>
                          <p className="text-sm text-gray-700">(11) 8888-8888</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">contato@maededeus.com.br</p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-700">Rua das Flores, 123</p>
                          <p className="text-sm text-gray-700">São Paulo, SP - CEP 01234-567</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto border-t pt-4 flex-shrink-0">
                    <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                      <Link href="/carrinho" className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Ver Carrinho {cartCount > 0 && `(${cartCount})`}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

