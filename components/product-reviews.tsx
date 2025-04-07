"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"

interface ProductReviewsProps {
  productId: number
  rating: number
  reviewCount: number
}

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    date: "12/03/2025",
    comment: "Produto maravilhoso! A qualidade é excelente e a entrega foi rápida. Recomendo a todos.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "João Santos",
    rating: 4,
    date: "05/03/2025",
    comment:
      "Gostei muito do produto. O acabamento é de boa qualidade e o design é lindo. Só não dei 5 estrelas porque demorou um pouco para chegar.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    rating: 5,
    date: "28/02/2025",
    comment:
      "Presente perfeito para minha mãe! Ela amou o produto e a mensagem. Certamente comprarei mais itens desta loja.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const ratingCounts = {
    5: Math.round(reviewCount * 0.7),
    4: Math.round(reviewCount * 0.2),
    3: Math.round(reviewCount * 0.05),
    2: Math.round(reviewCount * 0.03),
    1: Math.round(reviewCount * 0.02),
  }

  const totalReviews = Object.values(ratingCounts).reduce((a, b) => a + b, 0)

  const handleHover = (rating: number) => {
    if (hoverRating !== rating) {
      setHoverRating(rating)
    }
  }

  const handleHoverExit = () => {
    if (hoverRating !== 0) {
      setHoverRating(0)
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Avaliações dos Clientes</h3>

          <div className="flex items-center mb-6">
            <div className="flex mr-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <div>
              <div className="text-xl font-medium">{rating.toFixed(1)} de 5</div>
              <div className="text-sm text-gray-600">Baseado em {reviewCount} avaliações</div>
            </div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center">
                <div className="w-12 text-sm">{star} estrelas</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${(ratingCounts[star as keyof typeof ratingCounts] / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-right">{ratingCounts[star as keyof typeof ratingCounts]}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Escreva uma Avaliação</h3>

          <form className="space-y-4">
            <div>
              <Label htmlFor="review-name">Nome</Label>
              <Input id="review-name" />
            </div>

            <div>
              <Label htmlFor="review-email">E-mail</Label>
              <Input id="review-email" type="email" />
            </div>

            <div>
              <Label>Avaliação</Label>
              <div className="flex space-x-1 my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setUserRating(i + 1)}
                    onMouseEnter={() => handleHover(i + 1)}
                    onMouseLeave={handleHoverExit}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        i < (hoverRating || userRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="review-comment">Comentário</Label>
              <Textarea id="review-comment" rows={4} />
            </div>

            <Button className="bg-rose-600 hover:bg-rose-700">Enviar Avaliação</Button>
          </form>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Comentários dos Clientes</h3>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.date}</div>
                </div>
              </div>

              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

