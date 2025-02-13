import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart'

describe('Cart', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )
  })

  it('renders the Cart component', () => {
    screen.debug()
  })

  it ('renders correct heading', () => {
    expect(screen.getByRole('heading').textContent).toMatch(/total:/i)
    // expect(screen.getByRole('heading', { name: 'Total:' }))
  })

})
