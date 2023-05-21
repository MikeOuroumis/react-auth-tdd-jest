/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  redirectPath: string
}

const initialState: AuthState = {
  isAuthenticated: JSON.parse(
    localStorage.getItem('isAuthenticated') || 'false'
  ),
  redirectPath: '/'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
      localStorage.setItem('isAuthenticated', 'true')
    },
    logout(state) {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
    },
    setRedirectPath(state, action: PayloadAction<string>) {
      state.redirectPath = action.payload
    }
  }
})

export const { login, logout, setRedirectPath } = authSlice.actions

export default authSlice.reducer
