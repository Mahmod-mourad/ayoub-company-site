"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react"

const partners = [
  "Juhayna", "Giza Electric Cables", "electrostar", "كوفرتينا", "Fresh", "اكسترا",
  "دامسون للاثاث", "مطابع نهضة مصر", "مكرونة رويال", "B TECH", "سكيب للصناعات الكيماوية",
  "نجمة الزيتون", "نون", "غندور للصناعات الغذائية المتطورة", "Oubor Land", "Green Land",
  "world central kitchen", "FOGG", "Haj Arafa", "Royal Printing Press", "Amazon",
  "BOSTA", "Elsewedy Electric", "Central Bank of Egypt", "Al-Jumhuriya newspaper",
  "POV", "Rush Brush", "Tie house", "cmb", "Dally dres", "Arab Organization for Industrialization",
  "SUN DAY", "LAZURDE"
]

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const partnersPerSlide = 12
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const visiblePartners = partners.slice(currentIndex * partnersPerSlide, (currentIndex + 1) * partnersPerSlide)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Building2 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">شركاؤنا</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نفخر بالعمل مع أكبر الشركات والمؤسسات في مصر والشرق الأوسط
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </>
          )}

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {visiblePartners.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 text-center border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {partner}
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

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">32+</div>
            <div className="text-gray-600">شريك تجاري</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">عام من الشراكة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">رضا العملاء</div>
          </div>
        </div>
      </div>
    </section>
  )
}
