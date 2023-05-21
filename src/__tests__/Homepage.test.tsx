import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Homepage from '../pages/Homepage' // adjust the import path as needed

describe('Homepage', () => {
  afterEach(cleanup)

  it('is rendered on "/" and "/home"', () => {
    const routes = ['/home', '/']

    routes.forEach((route) => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={route} element={<Homepage />} />
          </Routes>
        </MemoryRouter>
      )

      expect(
        screen.getByRole('heading', { name: /Homepage/i })
      ).toBeInTheDocument()

      unmount()
    })
  })
})
