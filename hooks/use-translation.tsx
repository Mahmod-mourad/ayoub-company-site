"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { arTranslations } from "@/translations/ar"
import { enTranslations } from "@/translations/en"

type Locale = "ar" | "en"

interface TranslationContextType {
  t: (key: string) => string
  locale: Locale
  setLocale: (locale: Locale) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "ar" || savedLocale === "en")) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("locale", locale)
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  const t = (key: string) => {
    const translations = locale === "ar" ? arTranslations : enTranslations

    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let value: any = translations

    // Traverse the translations object
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <TranslationContext.Provider value={{ t, locale, setLocale }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
