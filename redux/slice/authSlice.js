import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: false,
  userInfo: {},
  isLoading: false,
  error: {},
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false
      state.error = payload || {}
    },

    setActiveUser: (state, { payload }) => {
      state.userInfo = payload
      state.isLoggedIn = true
    },

    loginSuccess: (state, { payload }) => {
      state.userInfo = payload
      state.isLoggedIn = true
      state.isLoading = false
    },

    logoutSuccess: (state) => {
      state.userInfo = {}
      state.isLoggedIn = false
      state.isLoading = false
    },
  },
})

const { reducer, actions } = authSlice

export const {
  requestPending,
  requestFail,
  loginSuccess,
  logoutSuccess,
  setActiveUser,
} = actions

export default reducer
