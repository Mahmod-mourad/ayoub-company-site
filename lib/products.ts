import type { Product } from "@/types/product"

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "حاوية بلاستيكية متعددة الاستخدامات",
    description: "حاوية بلاستيكية عالية الجودة مناسبة للتخزين والنقل",
    longDescription:
      "حاوية بلاستيكية متعددة الاستخدامات مصنوعة من مواد عالية الجودة مقاومة للصدمات والكسر. مثالية للاستخدام في المنازل والمكاتب والمستودعات. تأتي بأحجام مختلفة لتناسب احتياجاتك المختلفة.",
    price: 150,
    oldPrice: 180,
    image: "/placeholder.svg?height=300&width=300",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    category: "حاويات",
    rating: 4.5,
    reviews: 120,
    isNew: true,
    discount: 15,
    inStock: true,
    sku: "CONT-001",
    features: ["مقاومة للصدمات", "مقاومة للماء", "سهلة التنظيف", "متوفرة بألوان متعددة"],
    specifications: {
      المادة: "بولي بروبيلين",
      الأبعاد: "30 × 20 × 15 سم",
      الوزن: "500 جرام",
      السعة: "5 لتر",
    },
  },
  {
    id: "2",
    name: "أكياس بلاستيكية قابلة للتحلل",
    description: "أكياس بلاستيكية صديقة للبيئة قابلة للتحلل",
    price: 50,
    image: "/placeholder.svg?height=300&width=300",
    category: "أكياس",
    rating: 4.2,
    reviews: 85,
    isNew: false,
    inStock: true,
    sku: "BAG-001",
  },
  {
    id: "3",
    name: "علب تغليف بلاستيكية شفافة",
    description: "علب تغليف بلاستيكية شفافة مثالية للمنتجات الغذائية",
    price: 120,
    oldPrice: 150,
    image: "/placeholder.svg?height=300&width=300",
    category: "تغليف",
    rating: 4.7,
    reviews: 200,
    isNew: false,
    discount: 20,
    inStock: true,
    sku: "PACK-001",
  },
  {
    id: "4",
    name: "أنابيب بلاستيكية للسباكة",
    description: "أنابيب بلاستيكية عالية الجودة للاستخدامات المنزلية والصناعية",
    price: 200,
    image: "/placeholder.svg?height=300&width=300",
    category: "أنابيب",
    rating: 4.4,
    reviews: 150,
    isNew: true,
    inStock: true,
    sku: "PIPE-001",
  },
  {
    id: "5",
    name: "أواني بلاستيكية للزراعة",
    description: "أواني بلاستيكية متينة للزراعة المنزلية والحدائق",
    price: 80,
    image: "/placeholder.svg?height=300&width=300",
    category: "زراعة",
    rating: 4.3,
    reviews: 110,
    isNew: false,
    inStock: true,
    sku: "PLANT-001",
  },
  {
    id: "6",
    name: "صناديق تخزين بلاستيكية",
    description: "صناديق تخزين بلاستيكية متينة بأحجام مختلفة",
    price: 180,
    oldPrice: 220,
    image: "/placeholder.svg?height=300&width=300",
    category: "حاويات",
    rating: 4.6,
    reviews: 180,
    isNew: false,
    discount: 18,
    inStock: true,
    sku: "BOX-001",
  },
  {
    id: "7",
    name: "زجاجات بلاستيكية للمشروبات",
    description: "زجاجات بلاستيكية آمنة للاستخدام مع المشروبات",
    price: 60,
    image: "/placeholder.svg?height=300&width=300",
    category: "زجاجات",
    rating: 4.1,
    reviews: 95,
    isNew: true,
    inStock: true,
    sku: "BOTTLE-001",
  },
  {
    id: "8",
    name: "أدوات مائدة بلاستيكية",
    description: "أدوات مائدة بلاستيكية للاستخدام مرة واحدة",
    price: 40,
    image: "/placeholder.svg?height=300&width=300",
    category: "أدوات مائدة",
    rating: 4.0,
    reviews: 75,
    isNew: false,
    inStock: true,
    sku: "CUTLERY-001",
  },
  // Add more products to reach 40 total
  {
    id: "9",
    name: "حامل أقلام بلاستيكي",
    description: "حامل أقلام بلاستيكي أنيق للمكتب أو المنزل",
    price: 35,
    image: "/placeholder.svg?height=300&width=300",
    category: "مكتبية",
    rating: 4.2,
    reviews: 60,
    isNew: false,
    inStock: true,
    sku: "OFFICE-001",
  },
  {
    id: "10",
    name: "سلة مهملات بلاستيكية",
    description: "سلة مهملات بلاستيكية متينة للاستخدام المنزلي أو المكتبي",
    price: 70,
    image: "/placeholder.svg?height=300&width=300",
    category: "منزلية",
    rating: 4.3,
    reviews: 90,
    isNew: false,
    inStock: true,
    sku: "BIN-001",
  },
  // Continue with more products...
]

// Generate more products to reach 40
for (let i = 11; i <= 40; i++) {
  const categories = ["حاويات", "أكياس", "تغليف", "أنابيب", "زراعة", "زجاجات", "أدوات مائدة", "مكتبية", "منزلية"]
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const isNew = Math.random() > 0.7
  const hasDiscount = Math.random() > 0.7
  const price = Math.floor(Math.random() * 200) + 30

  products.push({
    id: i.toString(),
    name: `منتج بلاستيكي ${i}`,
    description: `وصف للمنتج البلاستيكي رقم ${i}`,
    price: price,
    oldPrice: hasDiscount ? Math.floor(price * 1.2) : undefined,
    image: "/placeholder.svg?height=300&width=300",
    category: randomCategory,
    rating: Math.floor(Math.random() * 10) / 2 + 2.5, // Random rating between 2.5 and 5
    reviews: Math.floor(Math.random() * 200) + 20,
    isNew: isNew,
    discount: hasDiscount ? Math.floor(Math.random() * 30) + 5 : undefined,
    inStock: Math.random() > 0.1, // 90% chance of being in stock
    sku: `PROD-${i.toString().padStart(3, "0")}`,
  })
}

export function getProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(id: string, category: string): Product[] {
  return products.filter((product) => product.id !== id && product.category === category).slice(0, 4)
}
