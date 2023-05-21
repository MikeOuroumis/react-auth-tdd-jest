import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { AppRoutes } from '../AppRouter'
import store from '../redux/store'
import authReducer from '../redux/slices/authSlice'

jest.mock('../pages/Dashboard', () => () => 'Mock Dashboard')

describe('Homepage', () => {
  afterEach(cleanup)

  it('is rendered on "/" and "/home"', () => {
    const routes = ['/home', '/']

    routes.forEach((route) => {
      const { unmount } = render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            <AppRoutes />
          </MemoryRouter>
        </Provider>
      )

      expect(
        screen.getByRole('heading', { name: /Homepage/i })
      ).toBeInTheDocument()

      unmount()
    })
  })

  it('navigates to /dashboard from /home', () => {
    const mockStore = configureStore({
      reducer: { auth: authReducer },
      preloadedState: { auth: { isAuthenticated: true } }
    })

    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/home']}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    )

    userEvent.click(screen.getByText(/Go to Dashboard/i))

    expect(screen.getByText('Mock Dashboard')).toBeInTheDocument()
  })
})
