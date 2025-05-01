"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Phone, Mail, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Header() {
  const { t, locale, setLocale } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    setLocale(locale === "ar" ? "en" : "ar")
  }

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.faqs"), href: "/faqs" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-1 text-red-600" />
                <span className="text-sm">+20 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-1 text-red-600" />
                <span className="text-sm">info@plasticsite.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="flex items-center text-sm hover:text-red-600" onClick={toggleLanguage}>
                <Globe className="h-4 w-4 ml-1 text-red-600" />
                <span>{locale === "ar" ? "English" : "العربية"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-40">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-600">House</span>
                  <span className="text-2xl font-bold text-gray-800">Plast</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-medium hover:text-red-600 transition-colors ${
                    pathname === link.href ? "text-red-600 border-b-2 border-red-600" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-red-600 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 font-medium hover:text-red-600 transition-colors ${
                      pathname === link.href ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-200">
          <div className="container mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t("products.search")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
