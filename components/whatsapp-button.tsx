"use client"

import { MessageCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function WhatsAppButton() {
  const { t } = useTranslation()

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/201030796415", "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={t("common.contactViaWhatsApp")}
      title={t("common.contactViaWhatsApp")}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
