import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


describe('App component', () => {
  it('renders App component', () => {
    const { container } = render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders appropriate message while loading', async () => {
    render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    )
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it ('renders correct heading after it has loaded', async () => {
    render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    )
    const heading = await screen.findByRole('heading', { level: 1, name: 'Galeries Libellule' })
    screen.debug()
    expect(heading).toBeInTheDocument()
  })

  it('renders all sections after it has loaded', async () => {
    render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    )
    const main = await screen.findByRole('main')
    const nav = await screen.findByRole('navigation')
    expect(main).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
  })
})
