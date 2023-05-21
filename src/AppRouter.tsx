import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { RootState } from './redux/store'
import { setRedirectPath } from './redux/slices/authSlice'

interface ProtectedRouteProps {
  children: React.ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const dispatch = useDispatch()
  const location = useLocation()

  if (!isAuthenticated) {
    dispatch(setRedirectPath(location.pathname))
    return <Navigate to="/login" replace />
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

function AppRouter() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default AppRouter
