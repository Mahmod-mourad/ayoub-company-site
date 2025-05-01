"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  content: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "محمد أحمد",
      position: "مدير المشتريات",
      company: "شركة الصناعات المتحدة",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "نتعامل مع شركة Plastic Site منذ أكثر من 5 سنوات، وقد كانت تجربتنا معهم ممتازة. جودة المنتجات عالية جدًا، والتسليم دائمًا في الموعد المحدد.",
    },
    {
      id: 2,
      name: "سارة محمود",
      position: "مدير العمليات",
      company: "مصنع النور",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "منتجات Plastic Site تتميز بالجودة العالية والمتانة. نحن نستخدم منتجاتهم في عملياتنا اليومية ولم نواجه أي مشاكل. خدمة العملاء ممتازة والفريق متعاون للغاية.",
    },
    {
      id: 3,
      name: "أحمد خالد",
      position: "المدير التنفيذي",
      company: "شركة الإنتاج الصناعي",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "اخترنا Plastic Site كمورد رئيسي للمنتجات البلاستيكية بسبب التزامهم بالجودة والابتكار. لقد ساعدتنا منتجاتهم على تحسين عملياتنا وتقليل التكاليف.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بالعلاقات القوية التي بنيناها مع عملائنا على مر السنين. إليك ما يقولونه عنا.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <Quote className="h-12 w-12 text-blue-100 mb-6" />

            <div className="mb-8">
              <p className="text-lg text-gray-700 italic mb-6">"{testimonials[currentIndex].content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={`mx-1 w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
