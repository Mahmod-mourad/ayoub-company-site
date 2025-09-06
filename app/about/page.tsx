import { Award, Users, TrendingUp, Leaf, Clock, Shield } from "lucide-react"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "فراس شحادة",
      position: "المدير التنفيذي",
      image: "/43.jpg",
      bio: "خبرة أكثر من 15 عامًا في صناعة البلاستيك",
    },
    {
      id: 2,
      name: "عمار شحادة",
      position: "مدير الإنتاج",
      image: "/44.jpg",
      bio: "متخصص في تطوير المنتجات وتحسين جودة الإنتاج",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/45.jpg" alt="مصنع شركة أيوب للتجارة والتوريدات" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto">
            شركة أيوب للتجارة والتوريدات رائدة في مجال تصنيع المنتجات البلاستيكية واللزق بخبرة تمتد لأكثر من 15 عامًا
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-4">
                تأسست شركة أيوب للتجارة والتوريدات في عام 2008 بهدف تقديم منتجات بلاستيكية عالية الجودة للسوق المحلي والإقليمي.
                بدأنا بمصنع صغير وفريق من 10 موظفين، وتوسعنا على مر السنين لنصبح واحدة من الشركات الرائدة في مجال صناعة
                البلاستيك.
              </p>
              <p className="text-gray-600 mb-4">
                منذ البداية، كان هدفنا هو تقديم منتجات تلبي أعلى معايير الجودة والسلامة. استثمرنا في أحدث التقنيات
                والمعدات، وعملنا على تطوير فريق من الخبراء المتخصصين في مجال صناعة البلاستيك.
              </p>
              <p className="text-gray-600">
                اليوم، نفخر بتقديم مجموعة واسعة من المنتجات البلاستيكية التي تخدم مختلف القطاعات، من الصناعات الثقيلة
                إلى الاستخدامات المنزلية اليومية.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/37.jpg"
                alt="تاريخ شركة أيوب للتجارة والتوريدات"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن نؤمن بأن النجاح يأتي من الالتزام بمجموعة من القيم الأساسية التي توجه كل ما نقوم به
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم منتجات عالية الجودة تلبي أو تتجاوز توقعات عملائنا. نستخدم أفضل المواد ونطبق أعلى معايير
                الجودة في كل مرحلة من مراحل الإنتاج.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">الاستدامة</h3>
              <p className="text-gray-600">
                نحن ملتزمون بتقليل تأثيرنا البيئي من خلال استخدام مواد قابلة لإعادة التدوير وتطبيق ممارسات التصنيع
                المستدامة.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">العملاء أولاً</h3>
              <p className="text-gray-600">
                نضع عملاءنا في مقدمة أولوياتنا ونسعى جاهدين لفهم احتياجاتهم وتقديم حلول تناسبهم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">الابتكار</h3>
              <p className="text-gray-600">
                نستثمر في البحث والتطوير لتقديم منتجات مبتكرة تلبي الاحتياجات المتغيرة للسوق.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">الالتزام</h3>
              <p className="text-gray-600">
                نلتزم بمواعيد التسليم ونحرص على تقديم خدمة موثوقة لعملائنا في جميع الأوقات.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">السلامة</h3>
              <p className="text-gray-600">
                نضع سلامة موظفينا وعملائنا في المقام الأول ونطبق أعلى معايير السلامة في جميع عملياتنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              يقود شركتنا فريق من الخبراء المتخصصين في مجال صناعة البلاستيك، يجمعون بين الخبرة والشغف والالتزام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">مرافقنا</h2>
              <p className="text-gray-600 mb-4">
                نمتلك مصنعًا حديثًا مجهزًا بأحدث التقنيات والمعدات لضمان إنتاج منتجات عالية الجودة. يمتد مصنعنا على مساحة
                5000 متر مربع ويضم خطوط إنتاج متعددة تعمل على مدار الساعة.
              </p>
              <p className="text-gray-600 mb-4">
                نستخدم أحدث تقنيات التصنيع بالحقن والبثق والنفخ لإنتاج مجموعة متنوعة من المنتجات البلاستيكية. كما نمتلك
                مختبرًا متطورًا لاختبار جودة المنتجات وضمان مطابقتها للمعايير الدولية.
              </p>
              <p className="text-gray-600">
                نحرص على تطبيق أعلى معايير السلامة والنظافة في جميع مرافقنا، ونعمل باستمرار على تحسين عملياتنا لتقليل
                تأثيرنا البيئي.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="/39.jpg"
                alt="مصنع شركة أيوب للتجارة والتوريدات"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <img
                src="/40.jpg"
                alt="خط إنتاج شركة أيوب للتجارة والتوريدات"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <img
                src="/41.jpg"
                alt="مختبر الجودة شركة أيوب للتجارة والتوريدات"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <img
                src="/42.jpg"
                alt="مستودع شركة أيوب للتجارة والتوريدات"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
