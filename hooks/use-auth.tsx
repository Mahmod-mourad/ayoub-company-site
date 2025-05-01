"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "./use-cart"
import { useWishlist } from "./use-wishlist"

interface User {
  id: string
  name: string
  email: string
  role: string
  profileImage?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // Handle redirects after login
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      const redirectInfo = localStorage.getItem("redirectAfterLogin")

      if (redirectInfo) {
        try {
          const { action, productId, quantity = 1 } = JSON.parse(redirectInfo)

          // Clear the stored redirect info
          localStorage.removeItem("redirectAfterLogin")

          // Get the product
          const getProductById = (id: string) => {
            const products = JSON.parse(localStorage.getItem("products") || "[]")
            return products.find((p: any) => p.id === id)
          }

          const product = getProductById(productId)

          if (product) {
            // Perform the intended action
            if (action === "addToCart") {
              addToCart({
                ...product,
                quantity,
              })
            } else if (action === "toggleWishlist") {
              addToWishlist(product)
            }
          }
        } catch (error) {
          console.error("Error handling redirect after login:", error)
        }
      }
    }
  }, [isAuthenticated, isLoading, addToCart, addToWishlist, router])

  const login = (userData: User) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
    router.push("/")
  }

  if (isLoading) {
    return null // Or a loading spinner
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
