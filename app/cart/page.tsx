"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useTranslation } from "@/hooks/use-translation"
import { Trash, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react"

export default function CartPage() {
  const { t } = useTranslation()
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [couponError, setCouponError] = useState("")

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
  }

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple coupon validation
    if (!couponCode.trim()) {
      setCouponError(t("cart.couponRequired"))
      return
    }

    // In a real app, you would validate the coupon code against a database
    // For this example, we'll just show an error
    setCouponError(t("cart.invalidCoupon"))
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-md">
          <ShoppingBag className="mx-auto mb-6 h-16 w-16 text-gray-400" />
          <h1 className="mb-4 text-2xl font-bold">{t("cart.empty")}</h1>
          <p className="mb-8 text-gray-600">{t("cart.emptyMessage")}</p>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("cart.continueShopping")}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">{t("cart.title")}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {t("cart.product")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {t("cart.price")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {t("cart.quantity")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {t("cart.total")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <span className="sr-only">{t("cart.actions")}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="mr-4">
                            <h3 className="text-sm font-medium text-gray-900">
                              <Link href={`/products/${item.id}`} className="hover:text-blue-600">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.price} ج.م</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="rounded-md border border-gray-300 p-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="rounded-md border border-gray-300 p-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} ج.م
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <button onClick={() => handleRemoveItem(item.id)} className="text-red-600 hover:text-red-900">
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <Link
              href="/products"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("cart.continueShopping")}
            </Link>
            <button
              onClick={clearCart}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Trash className="mr-2 h-4 w-4" />
              {t("cart.clearCart")}
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:w-1/3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">{t("cart.summary")}</h2>

            <div className="mb-4">
              <form onSubmit={handleCouponSubmit}>
                <label htmlFor="coupon" className="mb-2 block text-sm font-medium text-gray-700">
                  {t("cart.couponCode")}
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value)
                      setCouponError("")
                    }}
                    className="w-full rounded-r-none rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t("cart.enterCoupon")}
                  />
                  <button
                    type="submit"
                    className="rounded-l-none rounded-md border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 hover:bg-gray-200"
                  >
                    {t("cart.apply")}
                  </button>
                </div>
                {couponError && <p className="mt-1 text-sm text-red-600">{couponError}</p>}
              </form>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <p className="text-gray-600">{t("cart.subtotal")}</p>
                <p className="font-medium">{totalPrice.toFixed(2)} ج.م</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <p className="text-gray-600">{t("cart.shipping")}</p>
                <p className="font-medium">{t("cart.free")}</p>
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-lg font-semibold">{t("cart.total")}</p>
                <p className="text-lg font-bold">{totalPrice.toFixed(2)} ج.م</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                {t("cart.proceedToCheckout")}
                <ArrowRight className="mr-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-4 rounded-md bg-gray-50 p-4">
              <h3 className="mb-2 text-sm font-medium">{t("cart.paymentMethods")}</h3>
              <p className="text-sm text-gray-600">{t("cart.cashOnDelivery")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
