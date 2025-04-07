import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Troca e Devolução | Mãe de Deus Espaço Católico",
  description: "Conheça nossa política de troca e devolução de produtos",
}

export default function ExchangeReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Troca e Devolução", href: "/troca-devolucao", active: true },
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-playfair font-medium mb-6">Política de Troca e Devolução</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">Última atualização: 02 de Abril de 2025</p>

          <p className="mb-4">
            A Mãe de Deus Espaço Católico preza pela satisfação de seus clientes e pela qualidade de seus produtos.
            Nossa política de troca e devolução foi elaborada de acordo com o Código de Defesa do Consumidor e visa
            garantir uma experiência de compra tranquila e segura.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">1. Prazo para Troca ou Devolução</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">1.1 Arrependimento da Compra</h3>
          <p className="mb-4">
            De acordo com o Código de Defesa do Consumidor, o cliente tem até 7 (sete) dias corridos, a contar da data
            de recebimento do produto, para manifestar seu arrependimento da compra realizada à distância.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">1.2 Produtos com Defeito</h3>
          <p className="mb-4">
            Para produtos que apresentem defeitos de fabricação, o prazo para solicitação de troca é de 30 (trinta) dias
            corridos para produtos não duráveis e 90 (noventa) dias corridos para produtos duráveis, conforme
            estabelecido pelo Código de Defesa do Consumidor.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">2. Condições para Troca ou Devolução</h2>

          <p className="mb-4">Para que a troca ou devolução seja aceita, é necessário que:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>O produto esteja em sua embalagem original, com todos os acessórios e manuais</li>
            <li>O produto não apresente sinais de uso ou desgaste além do necessário para sua verificação</li>
            <li>A nota fiscal de compra seja apresentada</li>
            <li>O produto não tenha sido personalizado ou feito sob encomenda (exceto em caso de defeito)</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">3. Procedimento para Troca ou Devolução</h2>

          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Entre em contato com nosso Serviço de Atendimento ao Cliente através do e-mail{" "}
              <a href="mailto:atendimento@maededeus.com.br" className="text-rose-600 hover:underline">
                atendimento@maededeus.com.br
              </a>{" "}
              ou pelo telefone (11) 9999-9999.
            </li>
            <li className="mb-2">
              Informe o número do pedido, data da compra e o motivo da solicitação de troca ou devolução.
            </li>
            <li className="mb-2">Envie fotos do produto (caso seja um problema de defeito) e da nota fiscal.</li>
            <li className="mb-2">
              Após a análise e aprovação da solicitação, enviaremos as instruções para devolução do produto.
            </li>
            <li className="mb-2">O produto deve ser devolvido em sua embalagem original, com todos os acessórios.</li>
            <li>
              Após recebermos o produto e confirmarmos que está de acordo com as condições estabelecidas, realizaremos a
              troca ou reembolso.
            </li>
          </ol>

          <h2 className="text-xl font-medium mt-8 mb-4">4. Opções após a Aprovação da Troca ou Devolução</h2>

          <p className="mb-4">Após a aprovação da solicitação de troca ou devolução, o cliente poderá optar por:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Troca por produto idêntico:</strong> Caso o produto apresente defeito, realizaremos a troca por um
              produto idêntico, sujeito à disponibilidade em estoque.
            </li>
            <li>
              <strong>Troca por outro produto:</strong> O cliente pode optar por trocar por outro produto de valor igual
              ou superior (pagando a diferença) ou inferior (recebendo a diferença).
            </li>
            <li>
              <strong>Reembolso:</strong> O cliente pode optar pelo reembolso do valor pago, que será processado
              conforme nossa{" "}
              <Link href="/politicas-reembolso" className="text-rose-600 hover:underline">
                Política de Reembolso
              </Link>
              .
            </li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">5. Custos de Envio</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">5.1 Troca por Defeito</h3>
          <p className="mb-4">
            Em caso de troca por defeito de fabricação ou erro em nosso processo de envio, a Mãe de Deus Espaço Católico
            arcará com os custos de envio para devolução e reenvio do produto.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">5.2 Desistência da Compra</h3>
          <p className="mb-4">
            Em caso de desistência da compra dentro do prazo de arrependimento, a Mãe de Deus Espaço Católico arcará com
            os custos de retorno do produto, conforme previsto no Código de Defesa do Consumidor.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">6. Produtos Não Elegíveis para Troca</h2>

          <p className="mb-4">Alguns produtos não são elegíveis para troca, exceto em caso de defeito comprovado:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>Produtos personalizados ou feitos sob encomenda</li>
            <li>Livros, CDs, DVDs ou produtos digitais que tenham sido abertos ou utilizados</li>
            <li>Produtos de higiene pessoal que tenham sido abertos</li>
            <li>Produtos com embalagem violada</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">7. Prazo para Resolução</h2>

          <p className="mb-4">
            Após o recebimento do produto devolvido, teremos o prazo de até 10 (dez) dias úteis para análise e resolução
            da solicitação de troca ou devolução.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">8. Considerações Finais</h2>

          <p className="mb-4">
            Reservamo-nos o direito de modificar esta política a qualquer momento, sendo as alterações válidas a partir
            da data de publicação em nosso site.
          </p>

          <p className="mb-4">
            Caso tenha dúvidas sobre nossa política de troca e devolução, entre em contato com nosso Serviço de
            Atendimento ao Cliente.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <p className="mb-2">
              <strong>E-mail:</strong> atendimento@maededeus.com.br
            </p>
            <p className="mb-2">
              <strong>Telefone:</strong> (11) 9999-9999
            </p>
            <p>
              <strong>Horário de atendimento:</strong> Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

