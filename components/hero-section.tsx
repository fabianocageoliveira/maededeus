import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-rose-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6">
            Mãe de Deus <br />
            <span className="text-rose-600">Espaço Católico</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Artigos religiosos e decorativos para trazer mais fé, amor e espiritualidade para o seu lar e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-rose-600 hover:bg-rose-700">
              <Link href="/produtos">Explorar Produtos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('/images/hero-pattern.png')] bg-cover opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-200 rounded-full -mb-16 -mr-16 opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-16 h-16 bg-rose-200 rounded-full -mt-8 opacity-30"></div>
    </section>
  )
}

