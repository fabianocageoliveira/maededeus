import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import BestSellerProducts from "@/components/best-seller-products"
import TestimonialSection from "@/components/testimonial-section"
import HeroSlider from "@/components/hero-slider"
import NewsletterSection from "@/components/newsletter-section"
import ValuesSection from "@/components/values-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
      <BestSellerProducts />
      <ValuesSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  )
}

