import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

const totalCost = mockCartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

describe('Cart component', () => {
  it('renders cart products', () => {
    const { container } = render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading', () => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/cart/i)
    expect(screen.getByRole('heading', { level: 1, name: 'Cart' })).toBeInTheDocument()
  })

  it('renders cart products with all complete details', () => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
    expect(screen.getByText('Fake product C')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })[2]).toHaveTextContent('€7.50')
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })[3]).toHaveTextContent('€37.50')
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'fakeImageC.jpg')
  })

  it('renders correct number of cart products', () => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} />)
    const cartItems = screen.getAllByRole('img')
    expect(cartItems).toHaveLength(mockCartItems.length)
  })
})

describe('Cart component calls totalCost and handleDelete as expected', () => {
  it('renders total cost of all cart products', () => {
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} totalCost={totalCost} />)
    expect(screen.getByText(`Total: €${totalCost.toFixed(2)}`)).toBeInTheDocument()
  })
  
  it('calls handleDelete with correct arguments when button clicked', async () => {
    const mockDelete = vi.fn()
    const user = userEvent.setup()
    render(<Cart productItems={mockProductItems} cartItems={mockCartItems} totalCost={totalCost} handleDelete={mockDelete} />)
    const deleteBtn = screen.getAllByRole('button')
    await user.click(deleteBtn[0])
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete).toHaveBeenCalledWith('123', 35.50, 3)
  })
})
