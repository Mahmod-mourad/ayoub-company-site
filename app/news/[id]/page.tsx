"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { getNewsById, getRelatedNews } from "@/lib/news"
import type { NewsItem } from "@/types/news"

export default function NewsDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null)
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const newsId = Array.isArray(params.id) ? params.id[0] : params.id
      const fetchedNews = getNewsById(newsId)

      if (fetchedNews) {
        setNewsItem(fetchedNews)
        setRelatedNews(getRelatedNews(fetchedNews.id, 3))
      }
    }
    setIsLoading(false)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">الخبر غير موجود</h1>
        <p className="mb-6">عذراً، لم نتمكن من العثور على الخبر الذي تبحث عنه.</p>
        <Link
          href="/news"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          العودة إلى الأخبار
        </Link>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <img
          src={newsItem.image || "/placeholder.svg"}
          alt={newsItem.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-white py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">{newsItem.title}</h1>
            <div className="flex items-center justify-center text-sm mb-4">
              <span className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {newsItem.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {newsItem.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-blue-600">
              الأخبار
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{newsItem.title}</span>
          </div>
        </div>
      </div>

      {/* News Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="prose max-w-none">
                <p className="text-xl font-medium text-gray-700 mb-6">{newsItem.excerpt}</p>

                {newsItem.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}

                {newsItem.sections &&
                  newsItem.sections.map((section, index) => (
                    <div key={index} className="mt-8">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                      {section.image && (
                        <img
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          className="my-6 rounded-lg w-full h-auto"
                        />
                      )}
                    </div>
                  ))}
              </article>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">شارك هذا الخبر</h3>
                <div className="flex space-x-4">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Related News */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">أخبار ذات صلة</h3>
                <div className="space-y-4">
                  {relatedNews.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="font-medium hover:text-blue-600">
                          <Link href={`/news/${item.id}`}>{item.title}</Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">التصنيفات</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/news?category=company" className="text-gray-700 hover:text-blue-600">
                      أخبار الشركة
                    </Link>
                  </li>
                  <li>
                    <Link href="/news?category=industry" className="text-gray-700 hover:text-blue-600">
                      صناعة البلاستيك
                    </Link>
                  </li>
                  <li>
                    <Link href="/news?category=products" className="text-gray-700 hover:text-blue-600">
                      منتجات جديدة
                    </Link>
                  </li>
                  <li>
                    <Link href="/news?category=events" className="text-gray-700 hover:text-blue-600">
                      فعاليات ومعارض
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h3>
                <p className="mb-4">احصل على آخر الأخبار والتحديثات مباشرة إلى بريدك الإلكتروني</p>
                <form>
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-2 rounded-md text-gray-900 mb-3"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
