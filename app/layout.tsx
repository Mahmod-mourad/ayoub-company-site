import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { TranslationProvider } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CartProvider } from "./context/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "House Plast - منتجات بلاستيكية عالية الجودة",
  description: "شركة رائدة في مجال تصنيع المنتجات البلاستيكية واللزق بخبرة تمتد لأكثر من 15 عامًا",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={inter.className}>
      <body>
        <CartProvider>
          <TranslationProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </TranslationProvider>
        </CartProvider>
      </body>
    </html>
  )
}
