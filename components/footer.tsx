import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="relative h-16 w-48 mb-4">
              <Image src="/images/logomarca.png" alt="Mãe de Deus Espaço Católico" fill className="object-contain" />
            </div>
            <p className="text-gray-600 mb-4">
              Artigos religiosos e decorativos para trazer mais fé e espiritualidade para o seu lar.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="bg-rose-100 p-2 rounded-full text-rose-600 hover:bg-rose-200 transition-colors">
                  <Facebook size={18} />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="bg-rose-100 p-2 rounded-full text-rose-600 hover:bg-rose-200 transition-colors">
                  <Instagram size={18} />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="bg-rose-100 p-2 rounded-full text-rose-600 hover:bg-rose-200 transition-colors">
                  <Twitter size={18} />
                </div>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <div className="bg-rose-100 p-2 rounded-full text-rose-600 hover:bg-rose-200 transition-colors">
                  <Youtube size={18} />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produtos?categoria=decoracao"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  Decoração
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=tercos" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Terços e Rosários
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=imagens"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  Imagens Sacras
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=livros" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Livros Religiosos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos?categoria=presentes"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  Presentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Inscreva-se para receber novidades, promoções e conteúdos exclusivos.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-white" />
              <Button className="bg-rose-600 hover:bg-rose-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Mãe de Deus Espaço Católico. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/politica-privacidade" className="text-gray-600 hover:text-rose-600 text-sm">
                Política de Privacidade
              </Link>
              <Link href="/termos-condicoes" className="text-gray-600 hover:text-rose-600 text-sm">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

