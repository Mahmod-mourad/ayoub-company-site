import { createClient } from "@supabase/supabase-js"
import type { Product } from "@/types/product"

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Products functions
export async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data as Product[]
}

export async function fetchProductById(id: string) {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data as Product
}

export async function fetchProductsByCategory(category: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products by category:", error)
    return []
  }

  return data as Product[]
}

export async function fetchRelatedProducts(id: string, category: string, limit = 4) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", id)
    .limit(limit)

  if (error) {
    console.error("Error fetching related products:", error)
    return []
  }

  return data as Product[]
}
