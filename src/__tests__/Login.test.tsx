import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../pages/Login' // adjust the import path as needed

describe('Login', () => {
  it('logs in the user when the correct username and password are entered', async () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'uncinc' }
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'letmein' }
    })
    fireEvent.click(screen.getByText(/log in/i))

    expect(await screen.findByText(/logged in/i)).toBeInTheDocument()
  })
})
