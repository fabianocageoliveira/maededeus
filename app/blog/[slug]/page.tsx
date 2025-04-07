import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Breadcrumb from "@/components/breadcrumb"
import { CalendarDays, User, Clock, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Dados simulados para os artigos do blog
const blogPosts = [
  {
    id: 1,
    slug: "como-montar-um-altar-em-casa",
    title: "Como montar um altar em casa: guia completo",
    excerpt:
      "Aprenda como criar um espaço sagrado em seu lar para momentos de oração e conexão espiritual com a família.",
    content: `
      <p>Ter um altar em casa é uma tradição católica que remonta a séculos atrás. É um espaço sagrado dedicado à oração, reflexão e conexão espiritual. Neste guia, vamos mostrar como montar um altar em casa de forma simples e significativa.</p>
      
      <h2>Por que ter um altar em casa?</h2>
      
      <p>Um altar doméstico serve como um lembrete constante da presença de Deus em nosso lar. É um espaço que convida à oração diária e ajuda a cultivar a fé em família. Além disso, é uma forma de expressar nossa devoção e criar um ambiente de paz e espiritualidade.</p>
      
      <h2>Escolhendo o local ideal</h2>
      
      <p>O primeiro passo para montar um altar em casa é escolher o local adequado. Considere os seguintes aspectos:</p>
      
      <ul>
        <li>Um espaço tranquilo, longe de distrações</li>
        <li>Um local visível que lembre a família de fazer suas orações</li>
        <li>Uma área que possa ser mantida limpa e organizada</li>
        <li>Um espaço com uma superfície estável para apoiar os itens</li>
      </ul>
      
      <p>Muitas famílias optam por criar o altar na sala de estar, em um canto do quarto ou até mesmo em um corredor pouco movimentado. O importante é que seja um local respeitado por todos os membros da família.</p>
      
      <h2>Elementos essenciais para o altar</h2>
      
      <p>Um altar católico doméstico geralmente inclui os seguintes elementos:</p>
      
      <h3>1. Crucifixo</h3>
      
      <p>O crucifixo é o elemento central de qualquer altar católico, representando o sacrifício de Jesus por nós. Escolha um que tenha significado especial para sua família.</p>
      
      <h3>2. Imagens Sacras</h3>
      
      <p>Inclua imagens de Nossa Senhora, do Sagrado Coração de Jesus ou de santos de sua devoção. Estas imagens nos conectam com nossos intercessores celestiais e nos inspiram a seguir seus exemplos de virtude.</p>
      
      <h3>3. Bíblia Sagrada</h3>
      
      <p>A Palavra de Deus deve ocupar um lugar de destaque em seu altar. Uma Bíblia aberta em uma passagem significativa pode servir como inspiração para a oração diária.</p>
      
      <h3>4. Velas</h3>
      
      <p>As velas simbolizam a luz de Cristo e criam uma atmosfera de oração. Podem ser acesas durante os momentos de oração em família. Por segurança, certifique-se de apagá-las quando não estiver presente.</p>
      
      <h3>5. Água Benta</h3>
      
      <p>Um pequeno recipiente com água benta permite que a família se benza ao iniciar e finalizar as orações, lembrando o nosso batismo.</p>
      
      <h3>6. Terço</h3>
      
      <p>O terço é um instrumento poderoso de oração e não pode faltar em um altar católico. Você pode deixá-lo disposto de forma visível ou em uma pequena caixa decorativa.</p>
      
      <h2>Personalizando seu altar</h2>
      
      <p>Além dos elementos essenciais, você pode personalizar seu altar com:</p>
      
      <ul>
        <li>Flores naturais ou artificiais para embelezar o espaço</li>
        <li>Toalha de altar em cores litúrgicas</li>
        <li>Fotografias de entes queridos falecidos para incluí-los em suas orações</li>
        <li>Livros de orações e devocionários</li>
        <li>Relíquias ou souvenirs de peregrinações</li>
      </ul>
      
      <h2>Mantendo o altar</h2>
      
      <p>Um altar doméstico deve ser tratado com respeito e cuidado. Algumas dicas para mantê-lo:</p>
      
      <ul>
        <li>Limpe regularmente, removendo poeira e substituindo flores murchas</li>
        <li>Atualize elementos de acordo com o tempo litúrgico (roxo para Advento e Quaresma, verde para o Tempo Comum, etc.)</li>
        <li>Ensine as crianças a respeitarem este espaço sagrado</li>
        <li>Utilize-o diariamente para orações individuais e em família</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Montar um altar em casa é uma forma bela de trazer a fé para o centro da vida familiar. Não é necessário que seja elaborado ou caro - o mais importante é que seja um espaço que convide à oração e à reflexão. Comece com os elementos básicos e, com o tempo, vá enriquecendo este espaço sagrado com itens que tenham significado especial para sua família.</p>
      
      <p>Lembre-se que o verdadeiro altar está em nossos corações, e o altar físico é apenas um reflexo externo de nossa devoção interior. Que seu altar doméstico seja um ponto de encontro com Deus e um oásis de paz em meio à agitação do dia a dia.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "02 de Abril, 2025",
    author: "Maria Santos",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Maria Santos é especialista em decoração católica e consultora espiritual. Formada em Teologia, dedica-se a ajudar famílias a integrarem a fé no ambiente doméstico.",
    category: "Dicas",
    readTime: "8 min",
    tags: ["altar", "oração", "família", "devoção", "decoração católica"],
  },
  {
    id: 2,
    slug: "significado-dos-simbolos-catolicos",
    title: "O significado dos principais símbolos católicos na decoração",
    excerpt:
      "Conheça o significado profundo por trás dos símbolos católicos mais utilizados em itens decorativos e como eles podem enriquecer seu lar.",
    content: `
      <p>Os símbolos católicos carregam séculos de tradição e significados profundos. Quando incorporados à decoração de nossos lares, eles não apenas embelezam o ambiente, mas também nos conectam com nossa fé e nos lembram constantemente dos valores e ensinamentos cristãos. Neste artigo, vamos explorar o significado de alguns dos principais símbolos católicos utilizados em itens decorativos.</p>
      
      <h2>A Cruz e o Crucifixo</h2>
      
      <p>O símbolo mais reconhecível do cristianismo, a cruz representa o sacrifício de Jesus Cristo pela humanidade. Enquanto a cruz simples simboliza a ressurreição e a vitória sobre a morte, o crucifixo (cruz com a imagem de Cristo) nos lembra do sofrimento e da entrega de Jesus por amor a nós.</p>
      
      <p>Na decoração, a cruz pode ser encontrada em diversos estilos e materiais, desde madeira rústica até metais preciosos com acabamentos elaborados. Tradicionalmente, é colocada em locais de destaque como sobre portas de entrada (para proteção do lar) ou nas paredes principais dos cômodos.</p>
      
      <h2>O Sagrado Coração de Jesus</h2>
      
      <p>Esta representação de Jesus mostrando seu coração flamejante simboliza o amor divino e infinito de Cristo pela humanidade. O coração geralmente é retratado cercado por uma coroa de espinhos, com chamas e uma cruz no topo, representando o amor sacrificial de Jesus.</p>
      
      <p>Quadros e estátuas do Sagrado Coração são frequentemente colocados em salas de estar ou quartos, lembrando as famílias do amor de Deus e da importância de consagrar o lar a Cristo.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "28 de Março, 2025",
    author: "Pe. João Paulo",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Padre João Paulo é doutor em Teologia e História da Igreja. Atua como pároco e professor, dedicando-se especialmente ao estudo da simbologia cristã e sua aplicação na vida cotidiana dos fiéis.",
    category: "Espiritualidade",
    readTime: "10 min",
    tags: ["símbolos", "fé", "decoração", "tradição", "catolicismo"],
  },
]

// Posts relacionados
const relatedPosts = [
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
  },
]

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artigo não encontrado | Mãe de Deus Espaço Católico",
      description: "O artigo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | Blog | Mãe de Deus Espaço Católico`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}`, active: true },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8">
        {/* Cabeçalho do artigo */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-rose-600 mb-4">
            <Link href={`/blog?categoria=${post.category.toLowerCase()}`} className="hover:underline">
              {post.category}
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-playfair font-medium mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
        </div>

        {/* Imagem principal */}
        <div className="relative aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Conteúdo do artigo */}
        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="px-3 py-1 bg-gray-100 hover:bg-rose-100 rounded-full text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Compartilhar */}
        <div className="border-t border-b py-6 mb-8">
          <h3 className="text-lg font-medium mb-4">Compartilhe este artigo:</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-5 w-5 text-blue-600" />
              <span className="sr-only">Compartilhar no Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5 text-sky-500" />
              <span className="sr-only">Compartilhar no Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5 text-blue-700" />
              <span className="sr-only">Compartilhar no LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="sr-only">Compartilhar por e-mail</span>
            </Button>
          </div>
        </div>

        {/* Autor */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">{post.author}</h3>
              <p className="text-gray-600">{post.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Artigos relacionados */}
        <div>
          <h2 className="text-2xl font-playfair font-medium mb-6">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="border-0 shadow-sm overflow-hidden">
                <Link href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <CardContent className="pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <span className="text-rose-600">{relatedPost.category}</span>
                  </div>
                  <Link href={`/blog/${relatedPost.slug}`} className="block group">
                    <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-rose-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

