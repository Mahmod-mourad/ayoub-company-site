"use client"

import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Award } from "lucide-react"

export default function WhatsAppContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحباً، أود الحصول على عرض سعر لمنتجاتكم")
    window.open(`https://wa.me/201025593051?text=${message}`, "_blank")
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-100">
      <div className="grid md:grid-cols-2 gap-12">
        {/* WhatsApp Contact */}
        <div className="text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">تواصل معنا عبر واتساب</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            احصل على عرض سعر فوري ومخصص لمنتجاتك. فريقنا متاح على مدار الساعة للإجابة على استفساراتك
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto mb-8"
          >
            <MessageCircle className="ml-3 h-7 w-7" />
            ابدأ المحادثة الآن
          </button>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-4 text-lg">مميزات التواصل عبر واتساب:</h4>
            <div className="space-y-3 text-right">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                <span className="text-gray-700">استجابة فورية خلال دقائق</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                <span className="text-gray-700">عرض سعر مخصص لاحتياجاتك</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                <span className="text-gray-700">نصائح فنية مجانية</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                <span className="text-gray-700">متابعة الطلب حتى التسليم</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info & Stats */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6">معلومات التواصل</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">اتصل بنا</div>
                  <div className="text-gray-600">+201025593051</div>
                  <div className="text-gray-600">+201025448470</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">البريد الإلكتروني</div>
                  <div className="text-gray-600">info@houseplast.com</div>
                  <div className="text-gray-600">export@houseplast.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">العنوان</div>
                  <div className="text-gray-600">6 أكتوبر، المنطقة الصناعية الأولى</div>
                  <div className="text-gray-600 text-sm">أمام بنك الإسكندرية</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">ساعات العمل</div>
                  <div className="text-gray-600">24/7 - خطوطنا تعمل على مدار الساعة</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm">عام من الخبرة</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">3000+</div>
              <div className="text-green-100 text-sm">عميل راضي</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">90+</div>
              <div className="text-purple-100 text-sm">منتج متنوع</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100 text-sm">خدمة متواصلة</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
            <h5 className="font-bold text-gray-800 mb-4 text-center">لماذا تختار هاوس بلاست؟</h5>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-sm text-gray-600">جودة ممتازة</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-sm text-gray-600">أسعار تنافسية</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">خدمة عملاء متميزة</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-sm text-gray-600">تسليم سريع</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
