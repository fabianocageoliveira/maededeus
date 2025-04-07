import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import { CalendarDays, User, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Mãe de Deus Espaço Católico",
  description: "Artigos, reflexões e novidades sobre fé, espiritualidade e decoração católica",
}

// Dados simulados para os artigos do blog
const blogPosts = [
  {
    id: 1,
    slug: "como-montar-um-altar-em-casa",
    title: "Como montar um altar em casa: guia completo",
    excerpt:
      "Aprenda como criar um espaço sagrado em seu lar para momentos de oração e conexão espiritual com a família.",
    image: "/placeholder.svg?height=400&width=600",
    date: "02 de Abril, 2025",
    author: "Maria Santos",
    category: "Dicas",
    featured: true,
  },
  {
    id: 2,
    slug: "significado-dos-simbolos-catolicos",
    title: "O significado dos principais símbolos católicos na decoração",
    excerpt:
      "Conheça o significado profundo por trás dos símbolos católicos mais utilizados em itens decorativos e como eles podem enriquecer seu lar.",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 de Março, 2025",
    author: "Pe. João Paulo",
    category: "Espiritualidade",
    featured: false,
  },
  {
    id: 3,
    slug: "terco-em-familia",
    title: "A importância de rezar o terço em família",
    excerpt:
      "Descubra como a prática diária do terço pode fortalecer os laços familiares e trazer mais paz e harmonia para o seu lar.",
    image: "/placeholder.svg?height=400&width=600",
    date: "20 de Março, 2025",
    author: "Ana Oliveira",
    category: "Família",
    featured: false,
  },
  {
    id: 4,
    slug: "santos-do-mes-abril",
    title: "Santos do mês de Abril: conheça suas histórias e devoções",
    excerpt:
      "Conheça os principais santos celebrados em Abril, suas histórias inspiradoras e como incorporar suas devoções no dia a dia.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 de Março, 2025",
    author: "Carlos Mendes",
    category: "Santos",
    featured: false,
  },
  {
    id: 5,
    slug: "decoracao-pascal",
    title: "Ideias de decoração para o tempo pascal",
    excerpt:
      "Confira dicas e inspirações para decorar sua casa durante o tempo pascal, celebrando a ressurreição de Cristo.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 de Março, 2025",
    author: "Juliana Costa",
    category: "Decoração",
    featured: false,
  },
  {
    id: 6,
    slug: "presentes-primeira-comunhao",
    title: "Guia de presentes para Primeira Comunhão",
    excerpt:
      "Sugestões de presentes significativos para celebrar este momento especial na vida espiritual das crianças.",
    image: "/placeholder.svg?height=400&width=600",
    date: "05 de Março, 2025",
    author: "Roberta Lima",
    category: "Presentes",
    featured: false,
  },
]

// Categorias para filtro
const categories = [
  { name: "Todos", slug: "todos" },
  { name: "Dicas", slug: "dicas" },
  { name: "Espiritualidade", slug: "espiritualidade" },
  { name: "Família", slug: "familia" },
  { name: "Santos", slug: "santos" },
  { name: "Decoração", slug: "decoracao" },
  { name: "Presentes", slug: "presentes" },
]

export default function BlogPage() {
  // Encontrar o post em destaque
  const featuredPost = blogPosts.find((post) => post.featured)
  // Restante dos posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog", active: true },
        ]}
      />

      <div className="mt-8">
        <h1 className="text-3xl font-playfair font-medium mb-6">Blog</h1>

        {/* Categorias */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog?categoria=${category.slug}`}
              className="px-4 py-2 bg-gray-100 hover:bg-rose-100 rounded-full text-sm transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Post em destaque */}
        {featuredPost && (
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Link href={`/blog/${featuredPost.slug}`} className="group">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center space-x-2 text-white text-sm mb-2">
                    <span className="bg-rose-600 px-3 py-1 rounded-full">Em destaque</span>
                    <span>{featuredPost.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-2">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center text-white/80 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="border-0 shadow-sm overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <span className="text-rose-600">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-xl font-medium mb-2 group-hover:text-rose-600 transition-colors">{post.title}</h2>
                </Link>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-rose-600 hover:text-rose-700 text-sm flex items-center"
                >
                  Ler mais <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <Button variant="outline" className="w-10 h-10 p-0">
              1
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0">
              2
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0">
              3
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

