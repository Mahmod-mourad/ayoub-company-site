import Link from "next/link"
import { ArrowRight, ShoppingBag, Award, Truck, Phone, Mail, MapPin } from "lucide-react"
import { getProducts } from "@/lib/products"
import NewsletterSignup from "@/components/newsletter-signup"
import FeaturedProducts from "@/components/featured-products"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  const featuredProducts = getProducts().slice(0, 8)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">المنتجات البلاستيكية عالية الجودة لجميع احتياجاتك</h1>
            <p className="text-lg mb-8 text-blue-100">
              نقدم حلول بلاستيكية مبتكرة ومستدامة للصناعات والاستخدامات المنزلية بأعلى معايير الجودة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                تصفح المنتجات
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                تواصل معنا
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="منتجات بلاستيكية متنوعة"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-white/10 backdrop-blur-sm py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Award className="h-10 w-10 text-yellow-300 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">جودة ممتازة</h3>
                  <p className="text-blue-100">منتجات مصنعة بأعلى المعايير</p>
                </div>
              </div>
              <div className="flex items-center">
                <Truck className="h-10 w-10 text-yellow-300 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">شحن سريع</h3>
                  <p className="text-blue-100">توصيل لجميع أنحاء البلاد</p>
                </div>
              </div>
              <div className="flex items-center">
                <ShoppingBag className="h-10 w-10 text-yellow-300 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">منتجات متنوعة</h3>
                  <p className="text-blue-100">أكثر من 40 منتج لتختار من بينها</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">منتجاتنا المميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعة منتقاة من أفضل منتجاتنا البلاستيكية عالية الجودة المصممة لتلبية احتياجاتك
            </p>
          </div>

          <FeaturedProducts products={featuredProducts} />

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              عرض جميع المنتجات
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">من نحن</h2>
              <p className="text-gray-600 mb-4">
                شركة Plastic Site هي شركة رائدة في مجال تصنيع المنتجات البلاستيكية واللزق منذ أكثر من 15 عامًا. نحن نفخر
                بتقديم منتجات عالية الجودة تلبي احتياجات عملائنا في مختلف القطاعات.
              </p>
              <p className="text-gray-600 mb-6">
                نستخدم أحدث التقنيات والمعدات لضمان إنتاج منتجات متينة وآمنة وصديقة للبيئة. فريقنا من الخبراء ملتزم
                بتقديم أفضل الحلول البلاستيكية لعملائنا.
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                اقرأ المزيد عنا
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="مصنع Plastic Site"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم ودعنا نساعدك في العثور على المنتجات المناسبة
              لاحتياجاتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">اتصل بنا</h3>
              <p className="text-gray-600">+20 123 456 7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">info@plasticsite.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">العنوان</h3>
              <p className="text-gray-600">المنطقة الصناعية، القاهرة، مصر</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              صفحة الاتصال الكاملة
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
