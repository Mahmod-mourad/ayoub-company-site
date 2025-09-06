"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    company: "شركة جوهينة",
    position: "مدير المشتريات",
    content: "نعمل مع شركة أيوب للتجارة والتوريدات منذ أكثر من 10 سنوات ونفخر بجودة منتجاتهم وخدمتهم الممتازة. منتجاتهم تلبي جميع احتياجاتنا.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "سارة أحمد",
    company: "شركة Elsewedy Electric",
    position: "مدير التوريدات",
    content: "شركة أيوب للتجارة والتوريدات هي شريكنا الموثوق في مجال الأشرطة اللاصقة. جودة عالية وأسعار منافسة وخدمة عملاء ممتازة.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "محمد علي",
    company: "شركة Amazon",
    position: "مدير المشتريات",
    content: "منتجات شركة أيوب للتجارة والتوريدات تلبي أعلى معايير الجودة العالمية. نوصي بشدة بالتعامل معهم لجميع احتياجات التعبئة والتغليف.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "فاطمة محمود",
    company: "شركة Central Bank of Egypt",
    position: "مدير المشتريات",
    content: "نفخر بالشراكة مع شركة أيوب للتجارة والتوريدات. منتجاتهم عالية الجودة وخدمتهم احترافية. نوصي بالتعامل معهم.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 5,
    name: "علي حسن",
    company: "شركة BOSTA",
    position: "مدير التوريدات",
    content: "شركة أيوب للتجارة والتوريدات هي الخيار الأمثل لجميع احتياجاتنا من الأشرطة اللاصقة. جودة ممتازة وأسعار منافسة.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">آراء عملائنا</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف ما يقوله عملاؤنا عن جودة منتجاتنا وخدمتنا الممتازة
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-12 mx-8">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="h-8 w-8 text-white" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-800">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`mx-2 w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-blue-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">رضا العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">عميل نشط</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">عام من الثقة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">خدمة العملاء</div>
          </div>
        </div>
      </div>
    </section>
  )
}
