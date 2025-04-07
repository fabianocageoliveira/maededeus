import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Termos e Condições | Mãe de Deus Espaço Católico",
  description: "Conheça os termos e condições para utilização de nosso site e serviços",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Termos e Condições", href: "/termos-condicoes", active: true },
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-playfair font-medium mb-6">Termos e Condições</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">Última atualização: 02 de Abril de 2025</p>

          <p className="mb-4">
            Bem-vindo ao site da Mãe de Deus Espaço Católico. Ao acessar e utilizar este site, você concorda com os
            seguintes termos e condições. Por favor, leia-os atentamente.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="mb-4">
            Ao acessar e utilizar o site da Mãe de Deus Espaço Católico, você concorda em cumprir e estar vinculado a
            estes Termos e Condições, bem como a todas as leis e regulamentos aplicáveis. Se você não concordar com
            algum destes termos, está proibido de usar ou acessar este site.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">2. Uso do Site</h2>
          <p className="mb-4">
            O conteúdo deste site é fornecido apenas para fins informativos e comerciais. É proibido:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Usar o site para qualquer finalidade ilegal ou proibida por estes termos</li>
            <li>Tentar acessar áreas restritas do site sem autorização</li>
            <li>Usar o site de maneira que possa danificar, sobrecarregar ou comprometer sua funcionalidade</li>
            <li>Coletar informações de outros usuários sem consentimento</li>
            <li>Reproduzir, duplicar, copiar ou revender qualquer parte do site em violação destes Termos</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">3. Contas de Usuário</h2>
          <p className="mb-4">Ao criar uma conta em nosso site, você é responsável por:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fornecer informações precisas e completas</li>
            <li>Manter a confidencialidade de sua senha e conta</li>
            <li>Todas as atividades que ocorrem sob sua conta</li>
          </ul>
          <p className="mb-4">
            Reservamo-nos o direito de encerrar contas e recusar serviços a qualquer momento, por qualquer motivo, a
            nosso critério.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">4. Produtos e Compras</h2>
          <p className="mb-4">
            4.1 <strong>Disponibilidade de Produtos:</strong> Todos os produtos estão sujeitos à disponibilidade.
            Reservamo-nos o direito de descontinuar qualquer produto a qualquer momento.
          </p>
          <p className="mb-4">
            4.2 <strong>Preços:</strong> Os preços dos produtos estão sujeitos a alterações sem aviso prévio. O preço
            aplicável é aquele exibido no momento da finalização da compra.
          </p>
          <p className="mb-4">
            4.3 <strong>Pedidos:</strong> Ao fazer um pedido, você oferece comprar o produto de acordo com estes termos.
            Reservamo-nos o direito de aceitar ou recusar pedidos a nosso critério.
          </p>
          <p className="mb-4">
            4.4 <strong>Pagamento:</strong> Aceitamos os métodos de pagamento exibidos durante o processo de checkout.
            Todas as transações são processadas de forma segura por nossos parceiros de pagamento.
          </p>
          <p className="mb-4">
            4.5 <strong>Entrega:</strong> Os prazos de entrega são estimados e podem variar de acordo com a localização
            e disponibilidade dos produtos.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">5. Política de Devolução e Reembolso</h2>
          <p className="mb-4">
            5.1 <strong>Prazo para Devolução:</strong> Você pode devolver produtos dentro de 7 dias após o recebimento,
            desde que estejam em perfeitas condições, com a embalagem original e acompanhados da nota fiscal.
          </p>
          <p className="mb-4">
            5.2 <strong>Produtos Defeituosos:</strong> Em caso de produtos defeituosos, entraremos em contato para
            substituição ou reembolso.
          </p>
          <p className="mb-4">
            5.3 <strong>Reembolso:</strong> Os reembolsos serão processados no mesmo método de pagamento utilizado na
            compra, em até 30 dias após a aprovação da devolução.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">6. Propriedade Intelectual</h2>
          <p className="mb-4">
            Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens, vídeos, áudios e software, é
            propriedade da Mãe de Deus Espaço Católico ou de seus fornecedores de conteúdo e está protegido por leis de
            direitos autorais e marcas registradas.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">7. Limitação de Responsabilidade</h2>
          <p className="mb-4">
            A Mãe de Deus Espaço Católico não será responsável por quaisquer danos diretos, indiretos, incidentais,
            consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nosso site ou produtos.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">8. Privacidade</h2>
          <p className="mb-4">
            O uso de suas informações pessoais é regido por nossa{" "}
            <a href="/politica-privacidade" className="text-rose-600 hover:underline">
              Política de Privacidade
            </a>
            , que faz parte destes Termos e Condições.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">9. Alterações nos Termos</h2>
          <p className="mb-4">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
            imediatamente após a publicação no site. É sua responsabilidade verificar periodicamente se há atualizações.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">10. Lei Aplicável</h2>
          <p className="mb-4">
            Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a
            estes termos será submetida à jurisdição exclusiva dos tribunais de São Paulo.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">11. Contato</h2>
          <p className="mb-4">Se você tiver dúvidas sobre estes Termos e Condições, entre em contato conosco:</p>
          <p className="mb-4">
            <strong>E-mail:</strong> contato@maededeus.com.br
            <br />
            <strong>Telefone:</strong> (11) 9999-9999
            <br />
            <strong>Endereço:</strong> Rua das Flores, 123, São Paulo, SP - CEP 01234-567
          </p>
        </div>
      </div>
    </div>
  )
}

