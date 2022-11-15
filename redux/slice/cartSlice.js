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
        toast.success(`${payload.detail} has been added to cart!`, {
          position: "bottom-left",
        })
      } else {
        existingItem.quantity++
        toast.info(`Increased ${payload.detail} cart quantity!`, {
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
  },
})

export const { reducer, actions } = cartSlice

export const { addToCart } = actions

export default reducer
