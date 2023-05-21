import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppRoutes } from '../AppRouter'

describe('Navigation', () => {
  it('renders Dashboard when navigating to /dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
  })
})
