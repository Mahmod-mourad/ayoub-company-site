export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  oldPrice?: number
  image: string
  gallery?: string[]
  category: string
  rating: number
  reviews: number
  isNew: boolean
  discount?: number
  inStock: boolean
  sku: string
  features?: string[]
  specifications?: Record<string, string>
  details?: {
    title: string
    content: string
  }[]
}
