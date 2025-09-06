"use client"

import { useState } from "react"
import { Search, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { getFaqs } from "@/lib/faqs"

export default function FaqsPage() {
  const allFaqs = getFaqs()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openFaqs, setOpenFaqs] = useState<string[]>([])

  // Get unique categories
  const categories = ["all", ...new Set(allFaqs.map((faq) => faq.category))]

  // Filter FAQs based on search and category
  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = activeCategory === "all" || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Toggle FAQ open/close
  const toggleFaq = (id: string) => {
    setOpenFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/44.jpg" alt="مصنع شركة أيوب للتجارة والتوريدات" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl max-w-3xl mx-auto">إجابات على الأسئلة الأكثر شيوعًا حول منتجاتنا وخدماتنا</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن سؤال..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md ${
                    activeCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "all" ? "جميع الأسئلة" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="font-medium text-lg">{faq.question}</span>
                      {openFaqs.includes(faq.id) ? (
                        <Minus className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {openFaqs.includes(faq.id) && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">لا توجد أسئلة متطابقة مع بحثك</h3>
                <p className="text-gray-600 mb-6">حاول تغيير مصطلحات البحث أو تصفح فئة أخرى</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                >
                  عرض جميع الأسئلة
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            لا تتردد في التواصل معنا إذا كان لديك أي استفسارات أخرى. فريقنا جاهز للإجابة على جميع أسئلتك.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </main>
  )
}
