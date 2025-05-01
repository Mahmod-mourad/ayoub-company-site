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
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم ودعنا نساعدك.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">اتصل بنا</h3>
              <p className="text-gray-600">+20 123 456 7890</p>
              <p className="text-gray-600">+20 098 765 4321</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">info@plasticsite.com</p>
              <p className="text-gray-600">support@plasticsite.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">العنوان</h3>
              <p className="text-gray-600">المنطقة الصناعية، القاهرة، مصر</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ساعات العمل</h3>
              <p className="text-gray-600">الأحد - الخميس: 9 صباحًا - 5 مساءً</p>
              <p className="text-gray-600">الجمعة - السبت: مغلق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>

                {formStatus.type && (
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      formStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        الاسم <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        الموضوع
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold mb-6">موقعنا</h2>
                <div className="h-[400px] bg-gray-200 rounded-md overflow-hidden">
                  {/* Placeholder for map - in a real project, you would use Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600">خريطة الموقع</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">العنوان</h3>
                  <p className="text-gray-600">المنطقة الصناعية، القاهرة، مصر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك أسئلة متكررة؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            قد تجد إجابة لسؤالك في قسم الأسئلة الشائعة لدينا. تحقق منه قبل الاتصال بنا.
          </p>
          <a
            href="/faqs"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            الأسئلة الشائعة
          </a>
        </div>
      </section>
    </main>
  )
}
