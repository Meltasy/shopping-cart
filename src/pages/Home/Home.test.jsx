import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

const mockProductItems = [
  { id: '123', image: 'fakeImageA.jpg', title: 'Fake product A' },
  { id: '231', image: 'fakeImageB.jpg', title: 'Fake product B' },
  { id: '312', image: 'fakeImageC.jpg', title: 'Fake product C' },
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
    const productImages = screen.getAllByTestId('product-image')
    const productCimages = screen.getAllByAltText('Fake product C')
    expect(productImages[2]).toHaveAttribute('src', 'fakeImageC.jpg')
    expect(productCimages.length).toBe(3)
  })

  it('renders correct number of home products', () => {
    render(<Home productItems={mockProductItems} />)
    const allImages = screen.getAllByTestId('product-image')
    const visibleImages = allImages.filter(img =>
      getComputedStyle(img).opacity !== '0'
    )
    expect(allImages).toHaveLength(mockProductItems.length * 3)
    expect(visibleImages).toHaveLength(3)
  })
})
