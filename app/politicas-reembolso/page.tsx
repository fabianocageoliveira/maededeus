import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Políticas de Reembolso | Mãe de Deus Espaço Católico",
  description: "Conheça nossas políticas de reembolso para compras realizadas em nossa loja",
}

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Políticas de Reembolso", href: "/politicas-reembolso", active: true },
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-playfair font-medium mb-6">Políticas de Reembolso</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">Última atualização: 02 de Abril de 2025</p>

          <p className="mb-4">
            Na Mãe de Deus Espaço Católico, nos esforçamos para garantir sua total satisfação com os produtos
            adquiridos. Esta política de reembolso foi desenvolvida para proporcionar clareza sobre como tratamos
            solicitações de reembolso.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">1. Condições para Reembolso</h2>

          <p className="mb-4">Oferecemos reembolso total nas seguintes situações:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>Produto recebido com defeito de fabricação</li>
            <li>Produto danificado durante o transporte</li>
            <li>Produto entregue diferente do que foi pedido</li>
            <li>Produto não entregue, mas cobrado</li>
            <li>Cobrança em duplicidade</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">2. Prazo para Solicitação</h2>

          <p className="mb-4">
            O prazo para solicitar reembolso é de até 7 (sete) dias corridos a partir da data de recebimento do produto,
            conforme estabelecido pelo Código de Defesa do Consumidor.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">3. Como Solicitar Reembolso</h2>

          <p className="mb-4">Para solicitar um reembolso, siga os passos abaixo:</p>

          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Entre em contato com nosso Serviço de Atendimento ao Cliente através do e-mail{" "}
              <a href="mailto:atendimento@maededeus.com.br" className="text-rose-600 hover:underline">
                atendimento@maededeus.com.br
              </a>{" "}
              ou pelo telefone (11) 9999-9999.
            </li>
            <li className="mb-2">Informe o número do pedido, data da compra e o motivo da solicitação de reembolso.</li>
            <li className="mb-2">
              Envie fotos do produto (caso seja um problema de defeito ou dano) e da nota fiscal.
            </li>
            <li className="mb-2">Nossa equipe analisará sua solicitação e retornará em até 48 horas úteis.</li>
            <li>Após a aprovação, o reembolso será processado conforme as condições descritas abaixo.</li>
          </ol>

          <h2 className="text-xl font-medium mt-8 mb-4">4. Processamento do Reembolso</h2>

          <p className="mb-4">O reembolso será processado da seguinte forma:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Cartão de Crédito:</strong> O valor será estornado na fatura do cartão, podendo levar até 2 ciclos
              de faturamento para aparecer, dependendo da administradora do cartão.
            </li>
            <li>
              <strong>Boleto Bancário ou Transferência:</strong> O valor será devolvido via transferência bancária para
              a conta indicada pelo cliente em até 10 dias úteis após a aprovação.
            </li>
            <li>
              <strong>PIX:</strong> O valor será devolvido para a chave PIX utilizada na compra em até 5 dias úteis após
              a aprovação.
            </li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">5. Custos de Devolução</h2>

          <p className="mb-4">
            Em caso de defeito, dano ou erro em nosso processo, a Mãe de Deus Espaço Católico arcará com os custos de
            devolução do produto. Enviaremos um código de postagem para que você possa devolver o item sem custos.
          </p>

          <p className="mb-4">
            Em caso de desistência da compra sem que haja defeito no produto, o custo de devolução será de
            responsabilidade do cliente.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">6. Produtos Não Elegíveis para Reembolso</h2>

          <p className="mb-4">
            Alguns produtos não são elegíveis para reembolso, exceto em caso de defeito comprovado:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Produtos personalizados ou feitos sob encomenda</li>
            <li>Produtos com embalagem aberta, quando não apresentarem defeito</li>
            <li>Livros, CDs, DVDs ou produtos digitais que tenham sido abertos ou utilizados</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">7. Reembolso Parcial</h2>

          <p className="mb-4">Em alguns casos, podemos oferecer um reembolso parcial quando:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>O produto apresenta pequenos defeitos que não comprometem seu uso</li>
            <li>O produto foi usado antes da solicitação de devolução</li>
            <li>Partes ou acessórios do produto estão faltando</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">8. Considerações Finais</h2>

          <p className="mb-4">
            Reservamo-nos o direito de modificar esta política a qualquer momento, sendo as alterações válidas a partir
            da data de publicação em nosso site.
          </p>

          <p className="mb-4">
            Caso tenha dúvidas sobre nossa política de reembolso, entre em contato com nosso Serviço de Atendimento ao
            Cliente.
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

