import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import Home from './Home'

const mockProductItems = [
  { id: '123', image: 'fakeImageA.jpg', title: 'Fake product A' },
  { id: '321', image: 'fakeImageB.jpg', title: 'Fake product B' },
  { id: '231', image: 'fakeImageC.jpg', title: 'Fake product C' },
]

describe('Home component', () => {
  it('renders galeries libellule', () => {
    const { container } = render(<Home productItems={mockProductItems}/>)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading', () => {
    render(<Home productItems={mockProductItems}/>)
    screen.debug()
    expect(screen.getByRole('heading').textContent).toMatch(/galeries libellule/i)
    expect(screen.getByRole('heading', { name: 'Galeries Libellule' })).toBeInTheDocument()
  })

  it('renders home products with all complete details', () => {
    render(<Home productItems={mockProductItems} />)
    expect(screen.getAllByRole('img')[2]).toHaveAttribute('src', 'fakeImageC.jpg')
    expect(screen.getAllByAltText('Fake product C')[2])
  })

  it('renders correct number of home products', () => {
    render(<Home productItems={mockProductItems} />)
    const productItems = screen.getAllByRole('img')
    expect(productItems).toHaveLength(mockProductItems.length)
  })
})
