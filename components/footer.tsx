import Link from "next/link"
import { Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo_houseplast_inverse.png" alt="شركة أيوب للتجارة والتوريدات Logo" className="h-10 sm:h-12 rounded-full object-cover" />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              متخصصون في تصنيع جميع الاشرطه اللاصقه و مواد التعبئه و التغليف فيما يفوق ال15 عاما من الخبره و الامانه و الجوده
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/share/1FCJcfYGQA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm sm:text-base">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-1 ml-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">6 أكتوبر، المنطقة الصناعية الأولى، أمام بنك الإسكندرية</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+201025593051</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+201025448470</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">info@houseplast.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">export@houseplast.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4">النشرة الإخبارية</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والعروض الخاصة.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              &copy; {new Date().getFullYear()} شركة أيوب للتجارة والتوريدات. جميع الحقوق محفوظة
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                Developed By Shoman systems.
              </p>
              <div className="flex space-x-3 sm:space-x-4 space-x-reverse text-xs sm:text-sm text-gray-400">
                <a href="#" className="hover:text-red-500 transition-colors">
                  سياسة الخصوصية
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
