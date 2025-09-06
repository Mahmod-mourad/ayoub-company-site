"use client"

import type React from "react"

import Link from "next/link"
import { Eye, MessageCircle } from "lucide-react"
import type { Product } from "@/types/product"
import { useTranslation } from "@/hooks/use-translation"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation()

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const message = `مرحباً، أرغب في الاستفسار عن المنتج: ${product.name} (${product.sku}) بسعر ${product.price} جنيه`
    const whatsappUrl = `https://wa.me/201025593051?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {product.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            جديد
          </span>
        )}

        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            خصم {product.discount}%
          </span>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
            title={t("products.orderViaWhatsApp")}
          >
            <MessageCircle className="h-5 w-5 text-white" />
          </button>
          <Link
            href={`/products/${product.id}`}
            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            title={t("products.viewDetails")}
          >
            <Eye className="h-5 w-5 text-gray-700" />
          </Link>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <span className="text-xs sm:text-sm text-gray-500">{product.category}</span>
        <h3 className="font-semibold text-base sm:text-lg mb-2 hover:text-red-600 line-clamp-2">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-bold text-red-600 text-sm sm:text-base">{product.price} جنيه</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through text-xs sm:text-sm mr-2">{product.oldPrice} جنيه</span>
            )}
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${star <= product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
