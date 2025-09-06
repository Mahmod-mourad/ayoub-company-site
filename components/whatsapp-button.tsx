"use client"

import { MessageCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function WhatsAppButton() {
  const { t } = useTranslation()

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحباً، أود الحصول على عرض سعر لمنتجاتكم")
    window.open(`https://wa.me/201025593051?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 animate-bounce-in"
      aria-label={t("common.contactViaWhatsApp")}
      title={t("common.contactViaWhatsApp")}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
        1
      </div>
    </button>
  )
}
