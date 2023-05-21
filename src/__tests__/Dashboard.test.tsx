import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { AppRoutes } from '../AppRouter'

const mockStore = configureStore([])

describe('AppRoutes', () => {
  it('redirects unauthenticated users from /dashboard to /login', () => {
    const store = mockStore({
      auth: { isAuthenticated: false }
    })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/dashboard']}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })
})
