"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle, Bell, Gift, TrendingUp } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 4000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">تم الاشتراك بنجاح!</h2>
            <p className="text-green-700 text-lg">
              شكراً لك! ستتلقى آخر العروض والأخبار في بريدك الإلكتروني
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                اشترك في نشرتنا الإخبارية
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                احصل على آخر العروض الخاصة والأخبار والتحديثات مباشرة في بريدك الإلكتروني
              </p>
              
              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-yellow-300 mr-3" />
                  <span className="text-blue-100">عروض خاصة حصرية للمشتركين</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-yellow-300 mr-3" />
                  <span className="text-blue-100">أحدث المنتجات والتقنيات</span>
                </div>
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-yellow-300 mr-3" />
                  <span className="text-blue-100">إشعارات فورية بالعروض الجديدة</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">انضم إلينا الآن</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-3">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-white/30 rounded-xl focus:ring-4 focus:ring-white/20 focus:border-white transition-all duration-300 text-lg bg-white/10 text-white placeholder-white/70"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mr-3"></div>
                      جاري الاشتراك...
                    </>
                  ) : (
                    <>
                      اشترك الآن
                      <Send className="mr-3 h-6 w-6" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-sm text-blue-200 text-center mt-4">
                يمكنك إلغاء الاشتراك في أي وقت. نحن نحترم خصوصيتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
