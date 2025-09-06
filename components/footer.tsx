import Link from "next/link"
import { Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo_houseplast_inverse.png" alt="شركة أيوب للتجارة والتوريدات Logo" className="h-12 rounded-full object-cover" />
            </div>
            <p className="text-gray-400 mb-4">
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
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 ml-1" />
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mt-1 ml-2 flex-shrink-0" />
                <span className="text-gray-400">6 أكتوبر، المنطقة الصناعية الأولى، أمام بنك الإسكندرية</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400">+201025593051</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400">+201025448470</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400">info@houseplast.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 ml-2 flex-shrink-0" />
                <span className="text-gray-400">export@houseplast.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">النشرة الإخبارية</h3>
            <p className="text-gray-400 mb-4">اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والعروض الخاصة.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} شركة أيوب للتجارة والتوريدات. جميع الحقوق محفوظة | سياسة الخصوصية.
            </p>
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              Developed By Shoman systems.
            </p>
            <div className="flex space-x-4 space-x-reverse text-sm text-gray-400">
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
    </footer>
  )
}
