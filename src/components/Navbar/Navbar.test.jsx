import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('renders all links with the correct text', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    screen.debug()
    expect(screen.getAllByRole('link')[0].textContent).toMatch(/galeries libellule/i)
    expect(screen.getAllByRole('link')[1].textContent).toMatch(/shop/i)
    expect(screen.getAllByRole('link')[2].textContent).toMatch('')
  })

  it('links to the shop page', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const user = userEvent.setup()
    const shopButton = screen.getByRole('link', { name: /shop/i, })
    await user.click(shopButton)
    expect(window.location.href).toMatch(/\/shop/)
  })

  it('links to the home page', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const user = userEvent.setup()
    const homeButton = screen.getByRole('link', { name: /galeries libellule/i, })
    await user.click(homeButton)
    expect(window.location.href).toMatch(/\/home/)
  })

  it('links to the cart page', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const user = userEvent.setup()
    const cartButton = screen.getByRole('link', { name: '', })
    await user.click(cartButton)
    expect(window.location.href).toMatch(/\/cart/)
  })
})
