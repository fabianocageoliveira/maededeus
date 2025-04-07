import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Decoração",
    image: "/placeholder.svg?height=300&width=300",
    href: "/produtos?categoria=decoracao",
  },
  {
    name: "Terços e Rosários",
    image: "/placeholder.svg?height=300&width=300",
    href: "/produtos?categoria=tercos",
  },
  {
    name: "Imagens Sacras",
    image: "/placeholder.svg?height=300&width=300",
    href: "/produtos?categoria=imagens",
  },
  {
    name: "Presentes",
    image: "/placeholder.svg?height=300&width=300",
    href: "/produtos?categoria=presentes",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-medium mb-4">Nossas Categorias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de produtos cuidadosamente escolhidos para trazer mais fé e espiritualidade para o seu
            lar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
              </div>
              <h3 className="text-xl font-medium text-center">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

