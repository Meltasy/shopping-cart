import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('renders all links with the correct text', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    screen.debug()
    expect(screen.getByRole('link', { name: /galeries libellule/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '0' })).toBeInTheDocument()
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument()
  })

  it('links have the correct href attributes', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByRole('link', { name: /galeries libellule/i })).toHaveAttribute('href', '/home')
    expect(screen.getByRole('link', { name: /shop/i })).toHaveAttribute('href', '/shop')
    expect(screen.getByRole('link', { name: '0' })).toHaveAttribute('href', '/cart')
  })

  it('displays the cart quantity when provided', () => {
    render(
      <BrowserRouter>
        <Navbar quantityCart={5} />
      </BrowserRouter>
    )
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})
