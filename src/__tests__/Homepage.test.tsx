import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { AppRoutes } from '../AppRouter'

jest.mock('../pages/Dashboard', () => () => 'Mock Dashboard')

describe('Homepage', () => {
  afterEach(cleanup)

  it('is rendered on "/" and "/home"', () => {
    const routes = ['/home', '/']

    routes.forEach((route) => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>
      )

      expect(
        screen.getByRole('heading', { name: /Homepage/i })
      ).toBeInTheDocument()

      unmount()
    })
  })

  it('navigates to /dashboard from /home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <AppRoutes />
      </MemoryRouter>
    )

    userEvent.click(screen.getByText(/Go to Dashboard/i))

    expect(screen.getByText('Mock Dashboard')).toBeInTheDocument()
  })
})
