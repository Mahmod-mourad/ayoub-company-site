"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonInlineProps {
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButtonInline({ className = "", children }: WhatsAppButtonInlineProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحباً، أود الحصول على عرض سعر لمنتجاتكم")
    window.open(`https://wa.me/201025593051?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
    >
      {children || (
        <>
          واتساب فوري
          <MessageCircle className="ml-2 h-6 w-6" />
        </>
      )}
    </button>
  )
}

