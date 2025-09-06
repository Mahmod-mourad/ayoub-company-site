"use client"

import Link from "next/link"
import { ArrowRight, ShoppingBag, Award, Truck, Phone, Mail, MapPin, Users, Trophy, Package, Star, Building2, Clock, CheckCircle, Factory, Globe, Zap, MessageCircle } from "lucide-react"
import { getProducts } from "@/lib/products"
import NewsletterSignup from "@/components/newsletter-signup"
import FeaturedProducts from "@/components/featured-products"
import TestimonialSlider from "@/components/testimonial-slider"
import PartnersSection from "@/components/partners-section"
import WhatsAppContactSection from "@/components/whatsapp-contact-section"
import WhatsAppButtonInline from "@/components/whatsapp-button-inline"

export default function Home() {
  const featuredProducts = getProducts().slice(0, 8)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bg.jpg"
            alt="مصنع شركة أيوب للتجارة والتوريدات"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 animate-slide-in-left">
            <div className="flex items-center mb-4 sm:mb-6 animate-fade-in">
              <img src="/logo_houseplast_inverse.png" alt="شركة أيوب للتجارة والتوريدات Logo" className="h-12 sm:h-16 md:h-20 rounded-full object-cover hover-scale" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-scale-in">
              شركة أيوب للتجارة والتوريدات
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-blue-100">
              متخصصون في تصنيع جميع الاشرطه اللاصقه و مواد التعبئه و التغليف
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-blue-100 leading-relaxed">
              سلوتيب شفاف - سلوتيب كريستال - تيب انشائي دوكو - داكت تيب - المونيوم فويل - سلوتيب مسلح شبكي - دبل فيس فوم - دبل فيس شفاف - استرتش صناعي - استرتش غذائي - سلوتيب مطبوع - سلوتيب بي في سي - شريط لحام كهربي - سلوتيب الوان
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تصفح المنتجات
                <ShoppingBag className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <WhatsAppButtonInline />
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center justify-center text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                تواصل معنا
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <img
                src="/9573.jpg"
                alt="مصنع شركة أيوب للتجارة والتوريدات"
                className="rounded-2xl shadow-2xl max-w-full h-auto transform rotate-2 hover:rotate-0 transition-transform duration-500 animate-float hover-glow"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-lg p-2 sm:p-4 shadow-lg animate-pulse-glow">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">عام من الخبرة</div>
                </div>
              </div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold">3000+</div>
                  <div className="text-xs">عميل</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="relative bg-white/10 backdrop-blur-sm py-8 sm:py-12 border-t border-white/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 animate-slide-in-up hover-lift">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-300 mr-3 sm:mr-4" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg">جودة ممتازة</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">منتجات مصنعة بأعلى المعايير</p>
                </div>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 animate-slide-in-up hover-lift" style={{animationDelay: '0.1s'}}>
                <Factory className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-300 mr-3 sm:mr-4" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg">مصنع متطور</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">أحدث التقنيات والمعدات</p>
                </div>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 animate-slide-in-up hover-lift" style={{animationDelay: '0.2s'}}>
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-300 mr-3 sm:mr-4" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg">24 ساعة</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">خطوطنا تعمل على مدار الساعة</p>
                </div>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 animate-slide-in-up hover-lift" style={{animationDelay: '0.3s'}}>
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-300 mr-3 sm:mr-4" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg">تصدير عالمي</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">نصدر لجميع أنحاء العالم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">تواصل معنا عبر واتساب</h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">احصل على عرض سعر فوري ومخصص لمنتجاتك عبر واتساب</p>
            </div>
            
            <WhatsAppContactSection />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">جميع المنتجات</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              اكتشف مجموعة شاملة من الأشرطة اللاصقة ومواد التعبئة والتغليف عالية الجودة
            </p>
          </div>

          <FeaturedProducts products={featuredProducts} />

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              عرض جميع المنتجات
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">رسالة ترحيب</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <div>
                  <img src="/37.jpg" alt="House Plast Factory" className="rounded-lg shadow-lg w-full" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    شركه هاوس بلاست هي شركه متخصصه في تصنيع وانتاج الاشرطه اللاصقه و مواد التعبئه و التغليف فيما يفوق ال15 عاما من الخبره و الامانه و الجوده
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    جاهزون لتلبيه جميع الطلبيات و طلبيات التصدير و التوزيع
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    تواصل معانا لجميع الاستفسارات
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    خطوطنا تعمل 24 ساعه لتلبيه احتياجاتك و خدمتك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/38.jpg" alt="Factory Background" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">إنجازاتنا</h2>
            <p className="text-blue-100 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">أرقام تتحدث عن نجاحنا وثقة عملائنا على مدار أكثر من 15 عاماً</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 border border-white/20 animate-bounce-in">
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 text-yellow-300">3000+</div>
              <div className="text-blue-100 text-sm sm:text-base lg:text-xl font-semibold">عميل راضي</div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2">في جميع أنحاء العالم</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 border border-white/20 animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 text-yellow-300">15+</div>
              <div className="text-blue-100 text-sm sm:text-base lg:text-xl font-semibold">عام خبرة</div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2">في مجال التصنيع</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 border border-white/20 animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 text-yellow-300">25+</div>
              <div className="text-blue-100 text-sm sm:text-base lg:text-xl font-semibold">خبير متخصص</div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2">في فريق العمل</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 border border-white/20 animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 text-yellow-300">90+</div>
              <div className="text-blue-100 text-sm sm:text-base lg:text-xl font-semibold">منتج متنوع</div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2">لجميع الاحتياجات</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 lg:pr-8 xl:pr-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">مصنعنا</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                متخصصون في تصنيع جميع الاشرطه اللاصقه و مواد التعبئه و التغليف
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                نستخدم أحدث التقنيات والمعدات لضمان إنتاج منتجات متينة وآمنة وصديقة للبيئة. فريقنا من الخبراء ملتزم
                بتقديم أفضل الحلول البلاستيكية لعملائنا.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">تقنيات متطورة</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">جودة عالية</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">تصدير عالمي</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">خدمة 24/7</span>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-base sm:text-lg">
                اقرأ المزيد عنا
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="/39.jpg"
                  alt="مصنع شركة أيوب للتجارة والتوريدات"
                  className="rounded-lg shadow-lg w-full"
                />
                <img
                  src="/40.jpg"
                  alt="مصنع شركة أيوب للتجارة والتوريدات"
                  className="rounded-lg shadow-lg w-full mt-4 sm:mt-8"
                />
                <img
                  src="/41.jpg"
                  alt="مصنع شركة أيوب للتجارة والتوريدات"
                  className="rounded-lg shadow-lg w-full"
                />
                <img
                  src="/42.jpg"
                  alt="مصنع شركة أيوب للتجارة والتوريدات"
                  className="rounded-lg shadow-lg w-full mt-4 sm:mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">تواصل معنا</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم ودعنا نساعدك في العثور على المنتجات المناسبة
              لاحتياجاتك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-lg sm:text-xl mb-2">اتصل بنا</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">+201025593051</p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">+201025448470</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-lg sm:text-xl mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">info@houseplast.com</p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">export@houseplast.com</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-lg sm:text-xl mb-2">العنوان</h3>
              <p className="text-gray-600 text-sm sm:text-base">6 أكتوبر، المنطقة الصناعية الأولى</p>
              <p className="text-gray-600 text-xs sm:text-sm">أمام بنك الإسكندرية</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                صفحة الاتصال الكاملة
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <WhatsAppButtonInline className="inline-flex" />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">نحن متاحون على مدار الساعة لخدمتك</p>
          </div>
        </div>
      </section>
    </main>
  )
}
