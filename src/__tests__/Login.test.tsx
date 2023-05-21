import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../pages/Login' // adjust the import path as needed

describe('Login', () => {
  it('logs in the user when the correct username and password are entered', async () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'uncinc' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'letmein' },
    })
    fireEvent.click(screen.getByText(/log in/i, { selector: 'button' }))

    expect(await screen.findByText(/logged in/i)).toBeInTheDocument()
  })

  it('shows an error when wrong credentials are entered', async () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'wrongUsername' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongPassword' },
    })
    fireEvent.click(screen.getByText(/Log in/i, { selector: 'button' }))

    expect(await screen.findByText(/wrong credentials/i)).toBeInTheDocument()
  })
})
