import type { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Sobre Nós | Mãe de Deus Espaço Católico",
  description: "Conheça nossa história e missão",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Sobre Nós", href: "/sobre", active: true },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <h1 className="text-4xl font-playfair font-medium mb-6">Nossa História</h1>
          <div className="space-y-4">
            <p>
              Bem-vindo ao Mãe de Deus Espaço Católico, um lugar dedicado a trazer a fé e a espiritualidade para o seu
              lar através de produtos cuidadosamente selecionados.
            </p>
            <p>
              Nossa jornada começou com a missão de oferecer artigos religiosos que não apenas decoram, mas também
              inspiram e fortalecem a fé das famílias católicas.
            </p>
            <p>
              Cada produto em nossa loja é escolhido com carinho e atenção aos detalhes, buscando sempre a qualidade e o
              significado que cada peça traz para o ambiente familiar.
            </p>
          </div>

          <h2 className="text-2xl font-playfair font-medium mt-8 mb-4">Nossa Missão</h2>
          <p>
            Levar a presença de Deus e de Nossa Senhora para os lares, através de produtos que inspiram a fé e promovem
            a espiritualidade no dia a dia das famílias.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/store-front.jpg"
              alt="Fachada da nossa loja"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/team.jpg"
                alt="Nossa equipe"
                width={280}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/products-display.jpg"
                alt="Exposição de produtos"
                width={280}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-rose-50 rounded-lg p-8">
        <h2 className="text-3xl font-playfair font-medium text-center mb-8">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Fé</h3>
            <p>Acreditamos no poder transformador da fé na vida das pessoas e famílias.</p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Família</h3>
            <p>Valorizamos a família como núcleo fundamental da sociedade e da Igreja.</p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Qualidade</h3>
            <p>Comprometemo-nos com a excelência em cada produto que oferecemos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

