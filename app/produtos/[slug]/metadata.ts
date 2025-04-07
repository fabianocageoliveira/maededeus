import type { Metadata } from "next"

// Simulação de banco de dados de produtos
const products = {
  "imagem-sagrada-familia-dourada": {
    name: "Imagem Sagrada Família em Porcelana com Detalhes Dourados",
    description:
      "Belíssima imagem da Sagrada Família em porcelana branca com detalhes dourados. Uma peça elegante e refinada para decorar seu lar com fé e espiritualidade.",
  },
  "conjunto-nossa-senhora-azul": {
    name: "Conjunto Nossa Senhora das Graças Azul",
    description:
      "Lindo conjunto decorativo em tons de azul e branco, incluindo imagem de Nossa Senhora das Graças, pomba do Divino Espírito Santo e medalha decorativa.",
  },
  "caneca-voce-e-luz": {
    name: "Caneca Porcelana - Você é Luz",
    description:
      "Caneca de porcelana com a mensagem inspiradora 'Você é luz por onde passa!'. Perfeita para presentear alguém especial ou para trazer mais inspiração ao seu dia a dia.",
  },
  "divino-mandala": {
    name: "Divino Espírito Santo Mandala Decorativo",
    description:
      "Elegante decoração de parede em formato de mandala com o Divino Espírito Santo ao centro. Uma peça única que combina espiritualidade e design contemporâneo..",
  },
  "conjunto-anjos": {
    name: "Conjunto Anjos Decorativos",
    description:
      "Encantador conjunto de anjos decorativos em diferentes cores e estilos. Perfeitos para decorar ambientes infantis, quartos ou espaços de oração.",
  },
  "nossa-senhora-luminaria": {
    name: "Nossa Senhora Luminária Decorativa",
    description:
      "Elegante luminária decorativa em formato de Nossa Senhora. Uma peça única que combina devoção e funcionalidade, trazendo luz e paz para seu ambiente..",
  },
  "terco-sao-miguel": {
    name: "Terço São Miguel Arcanjo em Madeir",
    description:
      "Terço de São Miguel Arcanjo confeccionado em madeira com detalhes em azul. Uma peça especial para suas orações e devoção ao Príncipe da Milícia Celeste.",
  },
  "cruz-face-cristo": {
    name: "Cruz Face de Cristo em Resina",
    description:
      "Cruz decorativa com a face de Cristo em relevo. Uma peça de arte sacra que representa o sacrifício e amor de Jesus, ideal para decorar seu lar com fé.",
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

