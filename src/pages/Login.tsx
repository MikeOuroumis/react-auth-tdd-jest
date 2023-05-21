import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'uncinc' && password === 'letmein') {
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
        {loggedIn && <p>Logged in</p>}
        <button type="submit">Log in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
