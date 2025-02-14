import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import CartItem from './CartItem';

const mockProductItems = [
  { id: '123', title: 'Fake product A', image: 'fakeImageA.jpg' },
  { id: '321', title: 'Fake product B', image: 'fakeImageB.jpg' },
]

describe('Cart item component', () => {
  it('renders cart product items', () => {
    const { container } = render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems}/>)
    expect(container).toMatchSnapshot()
  })

  it('renders correct cart item details when found', () => {
    render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems}/>)
    screen.debug()
    expect(screen.getByText('Fake product A')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })[0]).toHaveTextContent('€35.50')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('3')
    expect(screen.getAllByRole('heading', { level: 4 })[1]).toHaveTextContent('€106.50')
    expect(screen.getByRole('img')).toHaveAttribute('src', 'fakeImageA.jpg')
  })

  it('does not render cart item details when not found', () => {
    render(<CartItem itemId='231' price={35.50} quantity={3} productItems={mockProductItems}/>)
    expect(screen.queryByText('€35.50')).not.toBeInTheDocument()
    expect(screen.queryByText('3')).not.toBeInTheDocument()
  })
})

describe('Cart item component calls handleDelete as expected',() => {
  const mockDelete = vi.fn()

  beforeEach(() => {
    render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems} handleDelete={mockDelete} />)
  })

  it('renders delete button with the correct text', () => {
    expect(screen.getByRole('button').textContent).toMatch('X')
  })
    
  it('calls handleDelete with correct arguments when button clicked', async () => {
    const user = userEvent.setup()
    const deleteBtn = screen.getByRole('button', { name: 'X'})
    await user.click(deleteBtn)
    expect(mockDelete).toHaveBeenCalledWith('123', 35.50, 3)
  })
})
