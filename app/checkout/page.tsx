"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, Truck, MapPin, Phone, Mail } from "lucide-react"

export default function CheckoutPage() {
  const { t } = useTranslation()
  const { cart, totalPrice, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("cash")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.firstName.trim()) errors.firstName = t("checkout.errors.firstName")
    if (!formData.lastName.trim()) errors.lastName = t("checkout.errors.lastName")
    if (!formData.email.trim()) errors.email = t("checkout.errors.email")
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = t("checkout.errors.emailInvalid")
    if (!formData.phone.trim()) errors.phone = t("checkout.errors.phone")
    if (!formData.address.trim()) errors.address = t("checkout.errors.address")
    if (!formData.city.trim()) errors.city = t("checkout.errors.city")

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate sending order data to server
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Prepare order data
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice: totalPrice,
        paymentMethod: paymentMethod,
        notes: formData.notes,
        orderDate: new Date().toISOString(),
      }

      // In a real application, you would send this data to your server
      // For this example, we'll simulate sending an email notification
      const emailData = {
        to: "mm203197@gmail.com",
        subject: "New Order Received",
        message: JSON.stringify(orderData, null, 2),
      }

      console.log("Order placed:", orderData)
      console.log("Email notification sent to:", emailData.to)

      // Clear cart and redirect to success page
      clearCart()
      router.push("/checkout/success")
    } catch (error) {
      console.error("Error placing order:", error)
      alert(t("checkout.errors.orderFailed"))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">{t("checkout.emptyCart")}</h1>
        <p className="mb-8 text-gray-600">{t("checkout.emptyCartMessage")}</p>
        <Link
          href="/products"
          className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          {t("checkout.continueShopping")}
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("checkout.title")}</h1>
        <p className="text-gray-600">{t("checkout.subtitle")}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{t("checkout.personalInfo")}</h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.firstName")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.firstName ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.firstName && <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.lastName")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.lastName ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.lastName && <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{t("checkout.shippingInfo")}</h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.address")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.address ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.address && <p className="mt-1 text-sm text-red-500">{formErrors.address}</p>}
                </div>

                <div>
                  <label htmlFor="city" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.city")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.city ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.city && <p className="mt-1 text-sm text-red-500">{formErrors.city}</p>}
                </div>

                <div>
                  <label htmlFor="postalCode" className="mb-2 block font-medium text-gray-700">
                    {t("checkout.postalCode")}
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{t("checkout.paymentMethod")}</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="cash" className="mr-3 block font-medium text-gray-700">
                    {t("checkout.cashOnDelivery")}
                  </label>
                </div>

                <div className="flex items-center opacity-50">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    disabled
                    className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="card" className="mr-3 block font-medium text-gray-700">
                    {t("checkout.creditCard")} ({t("checkout.comingSoon")})
                  </label>
                </div>
              </div>

              {paymentMethod === "cash" && (
                <div className="mt-4 rounded-md bg-yellow-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Truck className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm text-yellow-700">{t("checkout.cashOnDeliveryNote")}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Notes */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{t("checkout.orderNotes")}</h2>

              <div>
                <label htmlFor="notes" className="mb-2 block font-medium text-gray-700">
                  {t("checkout.additionalNotes")}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={t("checkout.notesPlaceholder")}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("checkout.processing")}
                  </>
                ) : (
                  <>{t("checkout.placeOrder")}</>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="sticky top-20 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">{t("checkout.orderSummary")}</h2>

            <div className="mb-4 max-h-80 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mr-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {t("checkout.quantity")}: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{item.price * item.quantity} ج.م</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">{t("checkout.subtotal")}</p>
                <p className="text-sm font-medium">{totalPrice} ج.م</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">{t("checkout.shipping")}</p>
                <p className="text-sm font-medium">{t("checkout.free")}</p>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <p className="text-base font-medium">{t("checkout.total")}</p>
                <p className="text-base font-bold">{totalPrice} ج.م</p>
              </div>
            </div>

            <div className="mt-6 rounded-md bg-gray-50 p-4">
              <h3 className="mb-2 text-sm font-medium">{t("checkout.contactInfo")}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-gray-400" />
                  <span>+20 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-gray-400" />
                  <span>info@plasticsite.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                  <span>{t("checkout.companyAddress")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
