import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'uncinc' && password === 'letmein') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
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
      </form>
    </div>
  )
}

export default Login
