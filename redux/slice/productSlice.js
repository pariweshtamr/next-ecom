import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  products: [],
  error: {},
  selectedProduct: {},
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getProductsSuccess: (state, { payload }) => {
      state.isLoading = false
      state.products = payload
    },
    getSingleProductSuccess: (state, { payload }) => {
      state.isLoading = false
      state.selectedProduct = payload
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
  },
})

const { reducer, actions } = productSlice
export const {
  requestPending,
  requestFail,
  getProductsSuccess,
  getSingleProductSuccess,
} = actions

export default reducer
