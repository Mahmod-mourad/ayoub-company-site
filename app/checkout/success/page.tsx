"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { CheckCircle, ShoppingBag, Home } from "lucide-react"

export default function CheckoutSuccessPage() {
  const { t } = useTranslation()

  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(10000 + Math.random() * 90000)}`

  useEffect(() => {
    // Send email notification (in a real app, this would be done server-side)
    console.log("Order success email notification sent to mm203197@gmail.com")
  }, [])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />

        <h1 className="mb-4 text-2xl font-bold">{t("checkout.success.title")}</h1>

        <p className="mb-2 text-gray-600">
          {t("checkout.success.orderNumber")}: <span className="font-semibold">{orderNumber}</span>
        </p>

        <p className="mb-8 text-gray-600">{t("checkout.success.message")}</p>

        <div className="mb-4 rounded-lg bg-blue-50 p-4 text-right">
          <h3 className="mb-2 font-semibold">{t("checkout.success.whatNext")}</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-medium text-blue-600">
                1
              </span>
              {t("checkout.success.step1")}
            </li>
            <li className="flex items-start">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-medium text-blue-600">
                2
              </span>
              {t("checkout.success.step2")}
            </li>
            <li className="flex items-start">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-medium text-blue-600">
                3
              </span>
              {t("checkout.success.step3")}
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-x-reverse sm:space-y-0">
          <Link
            href="/products"
            className="flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            {t("checkout.success.continueShopping")}
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            <Home className="mr-2 h-5 w-5" />
            {t("checkout.success.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  )
}
