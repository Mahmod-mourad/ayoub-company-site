import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-blue-100 mb-8">
            احصل على آخر الأخبار والعروض الخاصة والتحديثات حول منتجاتنا مباشرة إلى بريدك الإلكتروني
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              اشترك
            </button>
          </form>

          <p className="text-sm text-blue-200 mt-4">
            لن نشارك بريدك الإلكتروني مع أي جهة خارجية. يمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  )
}
