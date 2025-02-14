import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Cart from './Cart'

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
const mockCartItems = [
  { id: '123', price: 35.50, quantity: 3 },
  { id: '231', price: 7.50, quantity: 5 },
]

describe('Cart component', () => {
  beforeEach(() => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
  })

  it('renders cart products', () => {
    const { container } = render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading', () => {
    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/cart/i)
    expect(screen.getByRole('heading', { level: 1, name: 'Cart' })).toBeInTheDocument()
  })

  it('renders cart products with all complete details', () => {
    expect(screen.getByText('Fake product C')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })[2]).toHaveTextContent('€7.50')
    expect(screen.getAllByRole('heading', { level: 3 })[1]).toHaveTextContent('x 5')
    expect(screen.getAllByRole('heading', { level: 4 })[3]).toHaveTextContent('€37.50')
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'fakeImageC.jpg')
  })

  it('renders correct number of cart products', () => {
    const cartItems = screen.getAllByRole('img')
    expect(cartItems).toHaveLength(mockCartItems.length)
  })
})

describe('Cart component calls totalCost and handleDelete as expected', () => {
  const totalCost = mockCartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const mockDelete = vi.fn()

  beforeEach(() => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} totalCost={totalCost} handleDelete={mockDelete} />)
  })

  it('renders total cost of all cart products', () => {
    expect(screen.getByText(`Total: €${totalCost.toFixed(2)}`)).toBeInTheDocument()
  })
  
  it('calls handleDelete with correct arguments when button clicked', async () => {
    const user = userEvent.setup()
    const deleteBtn = screen.getAllByRole('button', { name: 'X'})
    await user.click(deleteBtn[0])
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete).toHaveBeenCalledWith('123', 35.50, 3)
  })
})
