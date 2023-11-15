'use client'

import React from 'react'

interface CartItemType {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItemType[]
  addToCart: (productId: string) => void
}

const CartContext = React.createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = React.useState<CartItemType[]>([])

  function addToCart(productId: string) {
    setCartItems((state) => {
      const productAlreadyInCart = state.some(
        (item) => item.productId === productId,
      )

      if (productAlreadyInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return React.useContext(CartContext)
}
