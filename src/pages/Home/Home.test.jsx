import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from './Home'

describe('Home component', () => {
    it('renders headline', () => {
      render(<Home title='Galeries Libellule' />)
      screen.debug()
    })

    it('renders galeries libellule', () => {
      const { container } = render(<Home />)
      expect(container).toMatchSnapshot()
    })
  })

describe('Home component', () => {
  it ('renders correct heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading').textContent).toMatch(/galeries libellule/i)
    expect(screen.getByRole('heading', { name: 'Galeries Libellule' }))
  })
})
