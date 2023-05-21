import React from 'react'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate()

  const goToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Homepage</h1>
      <button type="button" onClick={goToDashboard}>
        Go to Dashboard
      </button>
    </div>
  )
}

export default Homepage
