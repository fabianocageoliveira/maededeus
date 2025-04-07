import { Heart, Home, Cross, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-8 w-8 text-rose-600" />,
    title: "Amor",
    description: "Nossos produtos são selecionados com amor e carinho para trazer mais afeto ao seu lar.",
  },
  {
    icon: <Cross className="h-8 w-8 text-rose-600" />,
    title: "Fé",
    description: "Acreditamos no poder da fé para transformar vidas e fortalecer famílias.",
  },
  {
    icon: <Home className="h-8 w-8 text-rose-600" />,
    title: "Família",
    description: "Valorizamos a família como núcleo fundamental da sociedade e da Igreja.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-rose-600" />,
    title: "Qualidade",
    description: "Comprometemo-nos com a excelência em cada produto que oferecemos.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-medium mb-4">Nossos Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os princípios que norteiam nosso trabalho e nossa missão de levar mais fé e espiritualidade para os
            lares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-50 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

