"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image?: string
  category?: string
}

interface WishlistContextType {
  wishlist: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [totalItems, setTotalItems] = useState(0)

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      try {
        const parsedWishlist = JSON.parse(storedWishlist)
        setWishlist(parsedWishlist)
      } catch (error) {
        console.error("Error parsing stored wishlist:", error)
        localStorage.removeItem("wishlist")
      }
    }
  }, [])

  // Update localStorage and calculate totals whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    setTotalItems(wishlist.length)
  }, [wishlist])

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      // Check if item already exists in wishlist
      if (prevWishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
        return prevWishlist
      }
      // Item doesn't exist, add it
      return [...prevWishlist, item]
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id)
  }

  const clearWishlist = () => {
    setWishlist([])
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
