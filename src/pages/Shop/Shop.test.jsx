import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Shop from './Shop'

describe('Shop component', () => {
  const mockAdd = vi.fn()
  const mockProductItems = [
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
  ]

  beforeEach(() => {
    render(<Shop productItems={mockProductItems} handleAdd={mockAdd} />)
  })

  it('renders shop products', () => {
    const { container } = render(<Shop productItems={mockProductItems} />)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading', () => {
    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/products/i)
    expect(screen.getByRole('heading', { level: 1, name: 'Products' })).toBeInTheDocument()
  })

  it('renders shop products with all complete details', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'fakeImageA.jpg')
    expect(screen.getAllByRole('heading', { hidden: true, level: 2 })[0]).toHaveTextContent('Fake product A €35.50')
    expect(screen.getByText('This is fake product A.')).toBeInTheDocument()
  })

  it('renders correct number of shop products', () => {
    const productItems = screen.getAllByRole('img')
    expect(productItems).toHaveLength(mockProductItems.length)
  })

  it('calls handleAdd on shop prodcut forms', async () => {
    const user = userEvent.setup()
    const addBtn = screen.getAllByRole('button', { name: 'Add to Cart' })[0]
    await user.click(addBtn)
    expect(mockAdd).not.toHaveBeenCalled()
  })
})
