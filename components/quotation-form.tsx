"use client"

import { useState } from "react"
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    productDetails: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        phone: "",
        productDetails: ""
      })
    }, 4000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">تم إرسال طلبك بنجاح!</h3>
        <p className="text-green-700 text-lg mb-6">سنقوم بالتواصل معك قريباً لتقديم عرض السعر المخصص</p>
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">+201025593051</span>
          </div>
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">info@houseplast.com</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-100">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">اطلب عرض سعر مخصص</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-3">
                الاسم الكامل *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                placeholder="أدخل رقم هاتفك"
                required
              />
            </div>
            <div>
              <label htmlFor="productDetails" className="block text-sm font-bold text-gray-700 mb-3">
                اسم المنتج والكمية *
              </label>
              <textarea
                id="productDetails"
                name="productDetails"
                value={formData.productDetails}
                onChange={handleChange}
                rows={5}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                placeholder="اكتب تفاصيل المنتجات والكميات المطلوبة"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  جاري الإرسال...
                </>
              ) : (
                <>
                  إرسال الطلب
                  <Send className="mr-3 h-6 w-6" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <h4 className="text-xl font-bold text-gray-800 mb-6">معلومات التواصل</h4>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-800">اتصل بنا</div>
                <div className="text-gray-600">+201025593051</div>
                <div className="text-gray-600">+201025448470</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-800">البريد الإلكتروني</div>
                <div className="text-gray-600">info@houseplast.com</div>
                <div className="text-gray-600">export@houseplast.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-800">العنوان</div>
                <div className="text-gray-600">6 أكتوبر، المنطقة الصناعية الأولى</div>
                <div className="text-gray-600 text-sm">أمام بنك الإسكندرية</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg">
            <h5 className="font-bold text-gray-800 mb-2">مميزات طلب العرض السعر:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• عرض سعر مخصص لاحتياجاتك</li>
              <li>• استجابة سريعة خلال 24 ساعة</li>
              <li>• نصائح فنية مجانية</li>
              <li>• عروض خاصة للكميات الكبيرة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
