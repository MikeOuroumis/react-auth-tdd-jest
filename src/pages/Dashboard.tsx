import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

function Dashboard() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  )
}

export default Dashboard
