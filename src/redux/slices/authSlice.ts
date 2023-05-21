/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
