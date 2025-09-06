"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "يرجى ملء جميع الحقول المطلوبة",
      })
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: "",
        })
      }, 5000)
    }, 1000)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">تواصل معنا</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم ودعنا نساعدك.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">اتصل بنا</h3>
              <p className="text-gray-600 text-sm sm:text-base">+201025593051</p>
              <p className="text-gray-600 text-sm sm:text-base">+201025448470</p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-sm sm:text-base">info@houseplast.com</p>
              <p className="text-gray-600 text-sm sm:text-base">export@houseplast.com</p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
              <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">العنوان</h3>
              <p className="text-gray-600 text-sm sm:text-base">6 أكتوبر، المنطقة الصناعية الأولى، أمام بنك الإسكندرية</p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">ساعات العمل</h3>
              <p className="text-gray-600 text-sm sm:text-base">الأحد - الخميس: 9 صباحًا - 5 مساءً</p>
              <p className="text-gray-600 text-sm sm:text-base">الجمعة - السبت: مغلق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">أرسل لنا رسالة</h2>

                {formStatus.type && (
                  <div
                    className={`p-3 sm:p-4 mb-4 sm:mb-6 rounded-md text-sm sm:text-base ${
                      formStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">
                        الاسم <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm sm:text-base">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm sm:text-base">
                        الموضوع
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      >
                        <option value="">اختر موضوعًا</option>
                        <option value="استفسار عام">استفسار عام</option>
                        <option value="استفسار عن المنتجات">استفسار عن المنتجات</option>
                        <option value="طلب عرض سعر">طلب عرض سعر</option>
                        <option value="دعم فني">دعم فني</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md h-full">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">موقعنا</h2>
                <div className="h-[300px] sm:h-[400px] bg-gray-200 rounded-md overflow-hidden">
                  {/* Placeholder for map - in a real project, you would use Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600 text-sm sm:text-base">خريطة الموقع</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">العنوان</h3>
                  <p className="text-gray-600 text-sm sm:text-base">6 أكتوبر، المنطقة الصناعية الأولى، أمام بنك الإسكندرية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">هل لديك أسئلة متكررة؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            قد تجد إجابة لسؤالك في قسم الأسئلة الشائعة لدينا. تحقق منه قبل الاتصال بنا.
          </p>
          <a
            href="/faqs"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
          >
            الأسئلة الشائعة
          </a>
        </div>
      </section>
    </main>
  )
}
