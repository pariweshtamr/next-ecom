import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      )
      state.totalQuantity++
      if (!existingItem) {
        state.cartItems.push({
          ...payload,
          quantity: 1,
          totalPrice: newItem.price,
        })
        toast.success(`${payload.name} has been added to cart!`, {
          position: "bottom-left",
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)
        toast.info(`Increased ${payload.name} cart quantity!`, {
          position: "bottom-left",
        })
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )

      localStorage.setItem("cartState", JSON.stringify(state))
    },

    removeFromCart: (state, { payload }) => {
      const updateCartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      )

      state.cartItems = updateCartItems
      state.totalQuantity--
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )
      localStorage.setItem("cartState", JSON.stringify(state.cartItems))
      toast.error(`${payload.name} has been removed to cart!`, {
        position: "bottom-left",
      })
    },

    clearCart: (state) => {
      state.cartItems = []
      state.totalAmount = 0
      state.totalQuantity = 0
      toast.error(`Cart cleared!`, {
        position: "bottom-left",
      })
      localStorage.setItem("cartState", JSON.stringify(state))
    },

    decreaseProductQuantity: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      )

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
        state.totalQuantity--

        toast.info(`Decreased ${payload.name} cart quantity`, {
          position: "bottom-left",
        })
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        )
      } else if (existingItem.quantity === 1) {
        const updateCartItems = state.cartItems.filter(
          (item) => item.id !== payload.id
        )

        state.cartItems = updateCartItems
        state.totalQuantity--

        toast.error(`${payload.name} has been removed to cart!`, {
          position: "bottom-left",
        })
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        )
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const { reducer, actions } = cartSlice

export const { addToCart, removeFromCart, clearCart, decreaseProductQuantity } =
  actions

export default reducer
