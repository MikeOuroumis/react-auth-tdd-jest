/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  redirectPath: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, redirectPath: '/' },
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
    setRedirectPath(state, action) {
      state.redirectPath = action.payload
    }
  }
})

export const { login, logout, setRedirectPath } = authSlice.actions

export default authSlice.reducer
