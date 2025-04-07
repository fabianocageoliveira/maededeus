import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-medium mb-4">Inscreva-se em Nossa Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Receba novidades, promoções exclusivas e conteúdos inspiradores diretamente em seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Seu melhor e-mail" className="bg-white" />
            <Button className="bg-rose-600 hover:bg-rose-700 whitespace-nowrap">Inscrever-se</Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Ao se inscrever, você concorda com nossa Política de Privacidade. Você pode cancelar a inscrição a qualquer
            momento.
          </p>
        </div>
      </div>
    </section>
  )
}

