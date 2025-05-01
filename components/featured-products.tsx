"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"
import type { Product } from "@/types/product"

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const productsPerSlide = 4
  const totalSlides = Math.ceil(products.length / productsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const visibleProducts = products.slice(currentIndex * productsPerSlide, (currentIndex + 1) * productsPerSlide)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={prevSlide}
            className="mx-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

          <button
            onClick={nextSlide}
            className="mx-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
