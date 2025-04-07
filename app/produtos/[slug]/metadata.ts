import type { Metadata } from "next"

// Simulação de banco de dados de produtos
const products = {
  "quadro-familia": {
    name: "Quadro Família - É um presente de Deus",
    description:
      "Quadro decorativo com a mensagem 'A nossa família é um presente de Deus, repleto de amor'. Perfeito para decorar sua casa com fé e espiritualidade.",
  },
  "terco-madeira": {
    name: "Terço de Madeira com Medalha",
    description:
      "Terço de madeira artesanal com medalha de São Miguel Arcanjo. Ideal para orações diárias e como presente para ocasiões especiais.",
  },
  "imagem-sagrada-familia": {
    name: "Imagem Sagrada Família",
    description:
      "Imagem decorativa da Sagrada Família, representando Jesus, Maria e José. Uma peça de arte sacra para trazer paz e espiritualidade ao seu lar.",
  },
  "divino-espirito-santo": {
    name: "Divino Espírito Santo Decorativo",
    description:
      "Divino Espírito Santo decorativo para parede, símbolo de paz, sabedoria e inspiração. Ideal para decorar sua casa com fé e elegância.",
  },
  "quadro-nossa-senhora": {
    name: "Quadro Nossa Senhora",
    description:
      "Quadro decorativo com a imagem de Nossa Senhora das Graças. Uma peça de arte sacra para trazer proteção e bênçãos ao seu lar.",
  },
  "terco-parede": {
    name: "Terço de Parede Decorativo",
    description:
      "Terço decorativo para parede, uma peça única que combina fé e decoração. Ideal para sala de estar, quarto ou espaço de oração.",
  },
  "biblia-capa-especial": {
    name: "Bíblia Sagrada Capa Especial",
    description:
      "Bíblia Sagrada com capa especial em couro sintético e acabamento premium. Edição com letras grandes e marcador de páginas.",
  },
  "crucifixo-parede": {
    name: "Crucifixo de Parede",
    description:
      "Crucifixo de parede em madeira com detalhes em bronze. Uma peça tradicional para trazer proteção e fé ao seu lar.",
  },
  "familia-pouso-seguro": {
    name: "Família é lugar de Pouso seguro",
    description:
      "Um lindo quadro de madeira decorativo com a frase 'Família é lugar de Pouso seguro, Aconchego e amor!'.",
  },
  "familia-projeto-deus": {
    name: "Família é um projeto de Deus",
    description:
      "Um lindo quadro de madeira decorativo com a frase 'Família é um PROJETO de Deus, para refletir seu amor e cuidado por todos nós!'.",
  },
  "familia-presente-de-deus": {
    name: "A nossa Família é um Presente de Deus",
    description:
      "Um lindo quadro de madeira decorativo com a frase 'A nossa Família é um PRESENTE de Deus, repleto de AMOR!'.",
  },
  "familia-abencoada": {
    name: "Aqui mora uma Família abençoada",
    description:
      "Um lindo quadro de madeira decorativo com a frase 'Aqui mora uma Família abençoada, grata e muito feliz!'.",
  },
  "divino-espirito-santo-cruz": {
    name: "Divino Espírito Santo com Cruz",
    description: "Um lindo Divino Espírito Santo decorativo com uma cruz no topo.",
  },
  "familia-amor-de-deus": {
    name: "Família é o amor de DEUS",
    description:
      "Um lindo quadro de madeira decorativo com a frase 'Família é o amor de DEUS nos oferecendo um pouquinho do CÉU aqui na terra.'.",
  },
  "casa-abencoada-coracao": {
    name: "Casa abençoada com Coração",
    description: "Um lindo conjunto de peças decorativas em formato de casa com corações e frases religiosas.",
  },
  "deus-esta-neste-lugar": {
    name: "Amém e Deus - porque Deus está neste lugar!",
    description:
      "Um lindo conjunto de peças decorativas com as palavras 'Amém' e 'Deus' e a frase '...porque Deus está neste lugar!'.",
  },
  "terco-madeira-rustico": {
    name: "Terço de Madeira Rústico",
    description: "Um lindo terço de madeira rústico com uma cruz.",
  },
  "divino-espirito-santo-decorativo": {
    name: "Divino Espírito Santo Decorativo",
    description: "Um lindo Divino Espírito Santo decorativo.",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return {
      title: "Produto não encontrado | Mãe de Deus Espaço Católico",
      description: "O produto que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${product.name} | Mãe de Deus Espaço Católico`,
    description: product.description,
  }
}

