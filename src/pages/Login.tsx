import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'

function Login() {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'uncinc' && password === 'letmein') {
      dispatch(login())
      setLoggedIn(true)
      setError('')
    } else {
      setLoggedIn(false)
      setError('Wrong credentials')
    }
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">
          Username
          <input
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="passwordInput">
          Password
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
        {loggedIn && <p>Logged in</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
