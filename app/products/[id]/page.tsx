"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Star, MessageCircle, Info, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/lib/products"
import type { Product } from "@/types/product"
import ProductCard from "@/components/product-card"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()

  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id
      const fetchedProduct = getProductById(productId)

      if (fetchedProduct) {
        setProduct(fetchedProduct)
        setSelectedImage(fetchedProduct.image)
        setRelatedProducts(getRelatedProducts(fetchedProduct.id, fetchedProduct.category))
      }
    }
    setIsLoading(false)
  }, [params.id])

  const handleWhatsAppOrder = () => {
    if (!product) return

    const message = `مرحباً، أرغب في طلب المنتج: ${product.name} (${product.sku}) بسعر ${product.price} جنيه، الكمية: ${quantity}`
    const whatsappUrl = `https://wa.me/201030796415?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
        <p className="mb-6">عذراً، لم نتمكن من العثور على المنتج الذي تبحث عنه.</p>
        <Link
          href="/products"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          العودة إلى المنتجات
        </Link>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-red-600">
              المنتجات
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/products?category=${product.category}`} className="hover:text-red-600">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Product Images */}
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-5 gap-2">
                  <div
                    className={`border rounded-md overflow-hidden cursor-pointer ${selectedImage === product.image ? "border-red-500" : "border-gray-200"}`}
                    onClick={() => setSelectedImage(product.image)}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {product.gallery.map((image, index) => (
                    <div
                      key={index}
                      className={`border rounded-md overflow-hidden cursor-pointer ${selectedImage === image ? "border-red-500" : "border-gray-200"}`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 px-4">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 mr-2">
                  {product.rating} ({product.reviews} تقييم)
                </span>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold text-red-600">{product.price} جنيه</span>
                {product.oldPrice && <span className="text-gray-500 line-through mr-2">{product.oldPrice} جنيه</span>}
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Product Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">المميزات</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Product Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">المواصفات</h3>
                  <div className="border-t border-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className={`py-2 flex ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <span className="font-medium w-1/3">{key}</span>
                        <span className="w-2/3">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-700 ml-4">الكمية:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  طلب عبر واتساب
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Info className="h-4 w-4 ml-2" />
                  <span>متوفر في المخزون: {product.inStock ? "نعم" : "لا"}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Info className="h-4 w-4 ml-2" />
                  <span>رمز المنتج: {product.sku}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Info className="h-4 w-4 ml-2" />
                  <span>الفئة: {product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-3 border-b-2 border-red-600 text-red-600 font-medium">الوصف التفصيلي</button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-900">المواصفات</button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-900">التقييمات</button>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>{product.longDescription || product.description}</p>

            {product.details &&
              product.details.map((detail, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                  <p>{detail.content}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">منتجات ذات صلة</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
