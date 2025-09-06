import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { getNews } from "@/lib/news"

export default function NewsPage() {
  const news = getNews()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/47.jpg" alt="أخبار شركة أيوب للتجارة والتوريدات" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أخبار وتحديثات</h1>
          <p className="text-xl max-w-3xl mx-auto">تابع آخر أخبار شركتنا والتطورات في صناعة البلاستيك</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]"
              >
                <img src={item.image || "/43.jpg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-blue-600">
                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    قراءة المزيد
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            احصل على آخر الأخبار والتحديثات حول منتجاتنا وصناعة البلاستيك مباشرة إلى بريدك الإلكتروني
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                اشترك
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
