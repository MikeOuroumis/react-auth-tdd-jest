import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'

const mockStore = configureStore([])

describe('Login', () => {
  it('logs in the user when the correct username and password are entered', async () => {
    const store = mockStore({
      auth: { isAuthenticated: false }
    })

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'uncinc' }
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'letmein' }
    })
    fireEvent.click(screen.getByText(/log in/i, { selector: 'button' }))

    expect(await screen.findByText(/logged in/i)).toBeInTheDocument()
  })

  it('shows an error when wrong credentials are entered', async () => {
    const store = mockStore({
      auth: { isAuthenticated: false }
    })

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'wrongUsername' }
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongPassword' }
    })
    fireEvent.click(screen.getByText(/log in/i, { selector: 'button' }))

    expect(await screen.findByText(/wrong credentials/i)).toBeInTheDocument()
  })
})
