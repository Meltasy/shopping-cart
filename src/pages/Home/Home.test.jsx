import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home component', () => {
  it('renders galeries libellule', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

    it ('renders correct heading', () => {
    render(<Home />)
    screen.debug()
    expect(screen.getByRole('heading').textContent).toMatch(/galeries libellule/i)
    expect(screen.getByRole('heading', { name: 'Galeries Libellule' })).toBeInTheDocument()
  })
})
