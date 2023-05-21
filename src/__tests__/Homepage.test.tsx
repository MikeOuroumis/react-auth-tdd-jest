import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { AppRoutes } from '../AppRouter'

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
})
