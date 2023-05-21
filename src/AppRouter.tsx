import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
