import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import CartItem from './CartItem';
import userEvent from '@testing-library/user-event';

const mockProductItems = [
  { id: '123', title: 'Fake Product A', image: 'fakeImageA.jpg' },
  { id: '321', title: 'Fake Product B', image: 'fakeImageB.jpg' },
]

describe('Cart item component', () => {
  it('renders cart product items', () => {
    const { container } = render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems}/>)
    expect(container).toMatchSnapshot()
  })

  it('renders correct cart item details when found', () => {
    render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems}/>)
    screen.debug()
    expect(screen.getByText('Fake Product A')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { hidden: true, level: 4 })[0]).toHaveTextContent('€35.50')
    expect(screen.getByRole('heading', { hidden: true, level: 3 })).toHaveTextContent('3')
    expect(screen.getAllByRole('heading', { hidden: true, level: 4 })[1]).toHaveTextContent('€106.50')
    expect(screen.getByRole('img')).toHaveAttribute('src', 'fakeImageA.jpg')
  })

  it('does not render cart item details when not found', () => {
    render(<CartItem itemId='231' price={35.50} quantity={3} productItems={mockProductItems}/>)
    expect(screen.queryByText('€35.50')).not.toBeInTheDocument()
    expect(screen.queryByText('3')).not.toBeInTheDocument()
  })
})

describe('Cart item component calls handleDelete as expected',() => {
  it('renders delete button with the correct text', () => {
    render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems}/>)
    expect(screen.getByRole('button').textContent).toMatch('X')
  })
    
  it('calls handleDelete with correct arguments when button clicked', async () => {
    const mockDelete = vi.fn()
    render(<CartItem itemId='123' price={35.50} quantity={3} productItems={mockProductItems} handleDelete={mockDelete} />)
    const user = userEvent.setup()
    const deleteBtn = screen.getByRole('button', { name: 'X'})
    await user.click(deleteBtn)
    expect(mockDelete).toHaveBeenCalledWith('123', 35.50, 3)
  })
})
