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
        state.cartItems.push({ ...payload, quantity: 1 })
        toast.success(`${payload.name} has been added to cart!`, {
          position: "bottom-left",
        })
      } else {
        existingItem.quantity++
        toast.info(`Increased ${payload.name} cart quantity!`, {
          position: "bottom-left",
        })
        existingItem.price =
          Number(existingItem.totalPrice) + Number(newItem.price)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      )

      localStorage.setItem("cartState", JSON.stringify(state))
    },

    removeFromCart: (state, { payload }) => {
      const updateCartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      )

      state.cartItems = updateCartItems
      localStorage.setItem("cartState", JSON.stringify(state.cartItems))
      toast.error(`${payload.name} has been removed to cart!`, {
        position: "bottom-left",
      })
    },
  },
})

export const { reducer, actions } = cartSlice

export const { addToCart } = actions

export default reducer
