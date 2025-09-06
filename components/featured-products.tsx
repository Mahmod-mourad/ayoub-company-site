"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Eye } from "lucide-react"
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
      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product, index) => (
          <div key={product.id} className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getProductImage(product.id)}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    جديد
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2 space-x-reverse">
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 mr-2">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price} ج.م
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.oldPrice} ج.م
                      </span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    اطلب عرض سعر
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-2 w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Function to get product images based on product ID
function getProductImage(productId: string): string {
  const imageMap: { [key: string]: string } = {
    "1": "/42.png", // Crystal Adhesive Tape
    "2": "/43.png", // Scotch Adhesive Tape
    "3": "/44 (1).jpg", // Masking Tape
    "4": "/45.png", // Reticulum Armed Adhesive Tape
    "5": "/46.jpg", // Adhesive Aluminium
    "6": "/47.jpg", // Synthetic Stretch
    "7": "/48.png", // Printed Adhesive Tape
    "8": "/49.jpg", // DUCT TAPE
    "9": "/50.png", // Electrostatic Tape
    "10": "/51.png", // Coloured Adhesive Tape
    "11": "/52.jpg", // Double Face
    "12": "/53.jpg", // Packaging and Wrapping Products
    "13": "/54.png", // P.V.C Tape
    "14": "/16.jpg", // Food Stretch Film
    "15": "/17.png", // Double Face Transparent
  }

  return imageMap[productId] || "/placeholder.jpg"
}
