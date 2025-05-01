export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string[]
  sections?: {
    title: string
    content: string[]
    image?: string
  }[]
  image: string
  date: string
  author: string
  category: string
}
