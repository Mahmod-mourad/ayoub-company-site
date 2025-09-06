import type { Product } from "@/types/product"

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Crystal Adhesive Tape",
    description: "سلوتيب كريستال للتعبئه و التغليف لجميع منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "سلوتيب كريستال للتعبئه و التغليف لجميع منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 150,
    oldPrice: 180,
    image: "/100-bjzr4.png",
    gallery: [
      "/100-bjzr4.png",
      "/101-9dmxm.png",
      "/104-xf9v9.png",
    ],
    category: "سلوتيب",
    rating: 4.5,
    reviews: 120,
    isNew: true,
    discount: 15,
    inStock: true,
    sku: "CRYSTAL-001",
    features: ["شفاف", "قوي الالتصاق", "مقاوم للماء", "متوفر بأحجام مختلفة"],
    specifications: {
      المادة: "بولي بروبيلين",
      العرض: "48 مم",
      الطول: "66 متر",
      السماكة: "50 ميكرون",
    },
  },
  {
    id: "2",
    name: "Scotch Adhesive Tape",
    description: "سلوتيب شفاف للتعبئه و التغليف لجميع منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "سلوتيب شفاف للتعبئه و التغليف لجميع منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 120,
    oldPrice: 150,
    image: "/101-9dmxm.png",
    category: "سلوتيب",
    rating: 4.2,
    reviews: 85,
    isNew: false,
    discount: 20,
    inStock: true,
    sku: "SCOTCH-001",
    features: ["شفاف", "قوي الالتصاق", "سهل الاستخدام", "متوفر بأحجام مختلفة"],
    specifications: {
      المادة: "بولي بروبيلين",
      العرض: "48 مم",
      الطول: "66 متر",
      السماكة: "45 ميكرون",
    },
  },
  {
    id: "3",
    name: "Masking Tape",
    description: "تيب انشائي لاعمال التشطيبات والدهانات , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "تيب انشائي لاعمال التشطيبات والدهانات , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 80,
    image: "/104-xf9v9.png",
    category: "تيب انشائي",
    rating: 4.7,
    reviews: 200,
    isNew: true,
    inStock: true,
    sku: "MASKING-001",
    features: ["لاصق مؤقت", "لا يترك آثار", "مقاوم للحرارة", "سهل الإزالة"],
    specifications: {
      المادة: "ورق كريبي",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "180 ميكرون",
    },
  },
  {
    id: "4",
    name: "Reticulum Armed Adhesive Tape",
    description: "مسلح شبكي وطولي للاعمال الشاقه والثقيله , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "مسلح شبكي وطولي للاعمال الشاقه والثقيله , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 200,
    image: "/105-cy5s6.jpg",
    category: "سلوتيب مسلح",
    rating: 4.4,
    reviews: 150,
    isNew: true,
    inStock: true,
    sku: "ARMED-001",
    features: ["مقاوم للتمزق", "قوي الالتصاق", "للأعمال الشاقة", "متين"],
    specifications: {
      المادة: "بولي بروبيلين مسلح",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "100 ميكرون",
    },
  },
  {
    id: "5",
    name: "Adhesive Aluminium",
    description: "المونيوم تيب لاعمال المواسير التبريد و التسخين , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "المونيوم تيب لاعمال المواسير التبريد و التسخين , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 180,
    image: "/106-qft45.png",
    category: "المونيوم فويل",
    rating: 4.3,
    reviews: 110,
    isNew: false,
    inStock: true,
    sku: "ALUM-001",
    features: ["مقاوم للحرارة", "عازل حراري", "مقاوم للماء", "قوي الالتصاق"],
    specifications: {
      المادة: "ألمنيوم",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "80 ميكرون",
    },
  },
  {
    id: "6",
    name: "Synthetic Stretch",
    description: "استرتش صناعي للتغليف والحفاظ علي منتجك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "استرتش صناعي للتغليف والحفاظ علي منتجك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 160,
    oldPrice: 200,
    image: "/110-frd4p.png",
    category: "استرتش",
    rating: 4.6,
    reviews: 180,
    isNew: false,
    discount: 20,
    inStock: true,
    sku: "STRETCH-001",
    features: ["مرن", "قوي", "شفاف", "مقاوم للتمزق"],
    specifications: {
      المادة: "بولي إيثيلين",
      العرض: "500 مم",
      الطول: "1000 متر",
      السماكة: "20 ميكرون",
    },
  },
  {
    id: "7",
    name: "Printed Adhesive Tape",
    description: "سلوتيب مطبوع باسم مصنعك او شركتك او مؤسستك الخاصه بافضل خامه واحسن اسعار وضوح في الالوان والطباعه",
    longDescription:
      "سلوتيب مطبوع باسم مصنعك او شركتك او مؤسستك الخاصه بافضل خامه واحسن اسعار وضوح في الالوان والطباعه",
    price: 250,
    image: "/112.jpg",
    category: "سلوتيب مطبوع",
    rating: 4.1,
    reviews: 95,
    isNew: true,
    inStock: true,
    sku: "PRINTED-001",
    features: ["طباعة عالية الجودة", "ألوان واضحة", "مخصص", "قوي الالتصاق"],
    specifications: {
      المادة: "بولي بروبيلين",
      العرض: "48 مم",
      الطول: "66 متر",
      السماكة: "50 ميكرون",
    },
  },
  {
    id: "8",
    name: "DUCT TAPE",
    description: "داكت تيب لاعمال المواسير و الوصلات , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "داكت تيب لاعمال المواسير و الوصلات , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 140,
    image: "/113.jpg",
    category: "داكت تيب",
    rating: 4.0,
    reviews: 75,
    isNew: false,
    inStock: true,
    sku: "DUCT-001",
    features: ["مقاوم للماء", "قوي الالتصاق", "للأعمال الصعبة", "متين"],
    specifications: {
      المادة: "قماش مغطى بالبلاستيك",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "280 ميكرون",
    },
  },
  {
    id: "9",
    name: "Electrostatic Tape",
    description: "شريط لحام كهربي شيكرتون لاعمال الاسلاك والاعمال الكهربائيه الصعبه خامه لا تشتعل عاليه الجوده تتحمل جميع الظروف الصعبه",
    longDescription:
      "شريط لحام كهربي شيكرتون لاعمال الاسلاك والاعمال الكهربائيه الصعبه خامه لا تشتعل عاليه الجوده تتحمل جميع الظروف الصعبه",
    price: 300,
    image: "/93-7yjm3.png",
    category: "شريط لحام كهربي",
    rating: 4.2,
    reviews: 60,
    isNew: true,
    inStock: true,
    sku: "ELECTRO-001",
    features: ["مقاوم للحريق", "عازل كهربائي", "للأعمال الكهربائية", "عالي الجودة"],
    specifications: {
      المادة: "PVC",
      العرض: "20 مم",
      الطول: "20 متر",
      السماكة: "150 ميكرون",
    },
  },
  {
    id: "10",
    name: "Coloured Adhesive Tape",
    description: "سلوتيب الوان للتعبئه والتغليف ولتمييز منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "سلوتيب الوان للتعبئه والتغليف ولتمييز منتجاتك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 130,
    image: "/94-xz27x.png",
    category: "سلوتيب الوان",
    rating: 4.3,
    reviews: 90,
    isNew: false,
    inStock: true,
    sku: "COLORED-001",
    features: ["ألوان متعددة", "قوي الالتصاق", "لتمييز المنتجات", "متوفر بأحجام مختلفة"],
    specifications: {
      المادة: "بولي بروبيلين",
      العرض: "48 مم",
      الطول: "66 متر",
      السماكة: "50 ميكرون",
    },
  },
  {
    id: "11",
    name: "Double Face",
    description: "دبل فيس فوم و ورق للاستخدامات المختلفه , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "دبل فيس فوم و ورق للاستخدامات المختلفه , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 220,
    image: "/97-xnwyv.png",
    category: "دبل فيس",
    rating: 4.5,
    reviews: 120,
    isNew: true,
    inStock: true,
    sku: "DOUBLE-001",
    features: ["لاصق من الجانبين", "فوم وورق", "متعدد الاستخدامات", "قوي الالتصاق"],
    specifications: {
      المادة: "فوم وورق",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "1 مم",
    },
  },
  {
    id: "12",
    name: "Packaging and Wrapping Products",
    description: "منتجات تعبئه و تغليف بأعلي جوده وأفضل سعر",
    longDescription:
      "منتجات تعبئه و تغليف بأعلي جوده وأفضل سعر",
    price: 100,
    image: "/98-62kfb.png",
    category: "تعبئة وتغليف",
    rating: 4.4,
    reviews: 150,
    isNew: false,
    inStock: true,
    sku: "PACK-001",
    features: ["متعدد الاستخدامات", "عالي الجودة", "أفضل سعر", "متوفر بأحجام مختلفة"],
    specifications: {
      المادة: "بولي إيثيلين",
      العرض: "متغير",
      الطول: "متغير",
      السماكة: "متغير",
    },
  },
  {
    id: "13",
    name: "P.V.C Tape",
    description: "PVC leaves no trace . In various sizes, lengths and volumes",
    longDescription:
      "PVC leaves no trace . In various sizes, lengths and volumes",
    price: 180,
    image: "/99-d2mj6.png",
    category: "PVC",
    rating: 4.6,
    reviews: 180,
    isNew: true,
    inStock: true,
    sku: "PVC-001",
    features: ["لا يترك آثار", "متوفر بأحجام مختلفة", "قوي الالتصاق", "متين"],
    specifications: {
      المادة: "PVC",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "150 ميكرون",
    },
  },
  {
    id: "14",
    name: "Food Stretch Film",
    description: "استرتش غذائي للتغليف والحفاظ علي منتجك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "استرتش غذائي للتغليف والحفاظ علي منتجك , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 140,
    image: "/16.jpg",
    category: "استرتش غذائي",
    rating: 4.7,
    reviews: 200,
    isNew: true,
    inStock: true,
    sku: "FOOD-STRETCH-001",
    features: ["آمن للطعام", "شفاف", "مرن", "قوي"],
    specifications: {
      المادة: "بولي إيثيلين غذائي",
      العرض: "300 مم",
      الطول: "500 متر",
      السماكة: "15 ميكرون",
    },
  },
  {
    id: "15",
    name: "Double Face Transparent",
    description: "دبل فيس شفاف للاستخدامات المختلفه , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    longDescription:
      "دبل فيس شفاف للاستخدامات المختلفه , بأعلي جوده وافضل سعر جميع المقاسات و الاطوال ومختلف الميكرونات",
    price: 240,
    image: "/17.png",
    category: "دبل فيس شفاف",
    rating: 4.3,
    reviews: 110,
    isNew: true,
    inStock: true,
    sku: "DOUBLE-TRANS-001",
    features: ["شفاف", "لاصق من الجانبين", "متعدد الاستخدامات", "قوي الالتصاق"],
    specifications: {
      المادة: "بولي بروبيلين شفاف",
      العرض: "50 مم",
      الطول: "50 متر",
      السماكة: "50 ميكرون",
    },
  },
]

// Generate more products to reach 90 total
for (let i = 16; i <= 90; i++) {
  const categories = ["سلوتيب", "تيب انشائي", "سلوتيب مسلح", "المونيوم فويل", "استرتش", "سلوتيب مطبوع", "داكت تيب", "شريط لحام كهربي", "سلوتيب الوان", "دبل فيس", "تعبئة وتغليف", "PVC", "استرتش غذائي", "دبل فيس شفاف"]
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const isNew = Math.random() > 0.7
  const hasDiscount = Math.random() > 0.7
  const price = Math.floor(Math.random() * 300) + 50
  
  // Array of available images
  const availableImages = [
    "/100-bjzr4.png", "/101-9dmxm.png", "/104-xf9v9.png", "/105-cy5s6.jpg", 
    "/106-qft45.png", "/110-frd4p.png", "/112.jpg", "/113.jpg", "/93-7yjm3.png", 
    "/94-xz27x.png", "/97-xnwyv.png", "/98-62kfb.png", "/99-d2mj6.png", 
    "/16.jpg", "/17.png", "/2-sq59c.jpg", "/3-bty5w.jpg", "/34.jpg"
  ]
  
  const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)]

  products.push({
    id: i.toString(),
    name: `منتج ${i}`,
    description: `وصف للمنتج رقم ${i}`,
    price: price,
    oldPrice: hasDiscount ? Math.floor(price * 1.2) : undefined,
    image: randomImage,
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
