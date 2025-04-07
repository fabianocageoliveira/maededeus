import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Política de Privacidade | Mãe de Deus Espaço Católico",
  description: "Conheça nossa política de privacidade e como tratamos seus dados pessoais",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Política de Privacidade", href: "/politica-privacidade", active: true },
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-playfair font-medium mb-6">Política de Privacidade</h1>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">Última atualização: 02 de Abril de 2025</p>

          <p className="mb-4">
            A Mãe de Deus Espaço Católico valoriza a privacidade de seus clientes e visitantes. Esta Política de
            Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando
            você utiliza nosso site e serviços.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">1. Informações que Coletamos</h2>

          <h3 className="text-lg font-medium mt-6 mb-3">1.1 Informações fornecidas por você</h3>
          <p className="mb-4">Podemos coletar informações pessoais que você nos fornece diretamente, como:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Endereço para entrega e cobrança</li>
            <li>Informações de pagamento (processadas de forma segura por nossos parceiros de pagamento)</li>
            <li>Conteúdo de mensagens enviadas através de nossos formulários de contato</li>
            <li>Avaliações e comentários sobre produtos</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-3">1.2 Informações coletadas automaticamente</h3>
          <p className="mb-4">
            Quando você visita nosso site, podemos coletar automaticamente certas informações, como:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Endereço IP</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Páginas visitadas e tempo gasto no site</li>
            <li>Produtos visualizados ou adicionados ao carrinho</li>
            <li>Informações de localização aproximada</li>
            <li>Informações sobre como você interage com nosso site</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">2. Como Usamos Suas Informações</h2>
          <p className="mb-4">Utilizamos suas informações pessoais para os seguintes fins:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Processar e entregar seus pedidos</li>
            <li>Gerenciar sua conta e fornecer suporte ao cliente</li>
            <li>Enviar informações sobre seus pedidos, produtos e promoções</li>
            <li>Personalizar sua experiência de compra</li>
            <li>Melhorar nosso site e serviços</li>
            <li>Cumprir obrigações legais e fiscais</li>
            <li>Prevenir fraudes e proteger nossos direitos</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">3. Compartilhamento de Informações</h2>
          <p className="mb-4">Podemos compartilhar suas informações pessoais com:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Parceiros de logística para entrega de produtos</li>
            <li>Processadores de pagamento para completar transações</li>
            <li>Prestadores de serviços que nos auxiliam na operação do site</li>
            <li>Autoridades governamentais quando exigido por lei</li>
          </ul>
          <p className="mb-4">Não vendemos ou alugamos suas informações pessoais a terceiros para fins de marketing.</p>

          <h2 className="text-xl font-medium mt-8 mb-4">4. Cookies e Tecnologias Semelhantes</h2>
          <p className="mb-4">
            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, lembrar suas
            preferências e entender como os visitantes utilizam nosso site. Você pode gerenciar suas preferências de
            cookies através das configurações do seu navegador.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">5. Segurança das Informações</h2>
          <p className="mb-4">
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra
            acesso não autorizado, perda ou alteração. No entanto, nenhum método de transmissão pela internet ou
            armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">6. Seus Direitos</h2>
          <p className="mb-4">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acessar as informações que temos sobre você</li>
            <li>Corrigir informações imprecisas ou incompletas</li>
            <li>Solicitar a exclusão de suas informações pessoais</li>
            <li>Restringir ou opor-se ao processamento de suas informações</li>
            <li>Receber suas informações em formato estruturado</li>
            <li>Retirar seu consentimento a qualquer momento</li>
          </ul>
          <p className="mb-4">
            Para exercer esses direitos, entre em contato conosco através dos canais indicados abaixo.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">7. Retenção de Dados</h2>
          <p className="mb-4">
            Mantemos suas informações pessoais pelo tempo necessário para cumprir os fins descritos nesta política, a
            menos que um período de retenção mais longo seja exigido por lei.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">8. Alterações nesta Política</h2>
          <p className="mb-4">
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre
            disponível em nosso site, com a data da última atualização.
          </p>

          <h2 className="text-xl font-medium mt-8 mb-4">9. Contato</h2>
          <p className="mb-4">
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos suas
            informações pessoais, entre em contato conosco:
          </p>
          <p className="mb-4">
            <strong>E-mail:</strong> privacidade@maededeus.com.br
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

