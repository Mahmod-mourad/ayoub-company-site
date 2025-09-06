"use client"

import { useState, useEffect } from "react"
import { Search, Filter } from "lucide-react"
import ProductCard from "@/components/product-card"
import { getProducts } from "@/lib/products"
import type { Product } from "@/types/product"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  useEffect(() => {
    const allProducts = getProducts()
    setProducts(allProducts)
    setFilteredProducts(allProducts)
  }, [])

  useEffect(() => {
    let result = products

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, selectedCategory, products])

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Get unique categories
  const categories = ["all", ...new Set(products.map((product) => product.category))]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/46.jpg" alt="منتجات شركة أيوب للتجارة والتوريدات" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">منتجاتنا</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            اكتشف مجموعتنا الواسعة من المنتجات البلاستيكية عالية الجودة المصممة لتلبية احتياجاتك
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 sm:py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center w-full sm:w-auto">
              <Filter className="mr-2 text-gray-600 h-4 w-4" />
              <span className="mr-2 text-gray-600 text-sm">تصفية حسب:</span>
              <select
                className="flex-1 sm:flex-none border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "جميع الفئات" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                  <nav className="flex items-center overflow-x-auto">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-2 sm:px-3 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm whitespace-nowrap"
                    >
                      السابق
                    </button>

                    <div className="flex">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-2 sm:px-3 py-2 border border-gray-300 text-xs sm:text-sm ${
                            currentPage === page ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-2 sm:px-3 py-2 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm whitespace-nowrap"
                    >
                      التالي
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <h3 className="text-base sm:text-lg font-semibold mb-2">لا توجد منتجات متطابقة مع بحثك</h3>
              <p className="text-gray-600 text-sm">حاول تغيير معايير البحث أو التصفية</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
