import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: '123',
          image: 'fakeImageA.jpg',
          title: 'Fake product A',
          price: 35.50,
          description: 'This is fake product A.'
        }, {
          id: '321',
          image: 'fakeImageB.jpg',
          title: 'Fake product B',
          price: 57.99,
          description: 'This is fake product B.'
        }, {
          id: '231',
          image: 'fakeImageC.jpg',
          title: 'Fake product C',
          price: 7.50,
          description: 'This is fake product C.'
        },
      ])
  })
)

describe('App component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    )
  })

  it('renders App component', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading after it has loaded', async () => {
    const heading = await screen.findByRole('heading', { level: 1, name: 'Galeries Libellule' })
    // screen.debug()
    expect(heading).toBeInTheDocument()
  })

  it('renders all sections after it has loaded', async () => {
    const main = await screen.findByRole('main')
    const nav = await screen.findByRole('navigation')
    expect(main).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
  })
})

describe('App component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Routes>
          <Route path='/:name' element={<App />} />
        </Routes>
      </MemoryRouter>
    )
  })

  it('renders App component', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it('loads and renders productItems in Shop', async () => {
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    // await waitFor(() => {
    //   expect(screen.getByText('Fake product A')).toBeInTheDocument()
    // })
    // const product = await screen.findByText('Fake product A')
    // expect(product).toBeInTheDocument()
  })
})
