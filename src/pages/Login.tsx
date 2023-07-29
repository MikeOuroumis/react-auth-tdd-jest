import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/slices/authSlice'
import { RootState } from '../redux/store'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectPath = useSelector(
    (state: RootState) => state.auth.redirectPath
  )

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'tdd' && password === 'letmein') {
      dispatch(login())
      setLoggedIn(true)
      setError('')
      navigate(redirectPath)
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
