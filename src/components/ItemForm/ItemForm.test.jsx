import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ItemForm from './ItemForm'

describe('Shop item form component', () => {
  beforeEach(() => {
    render(<ItemForm />)
  })

  it('renders shop item form', () => {
    const { container } = render(<ItemForm />)
    expect(container).toMatchSnapshot()
  })

  it('renders label and input for form', () => {
    screen.debug()
    expect(screen.getByLabelText('Quantity:'))
    expect(screen.getByRole('textbox'))
  })

  it('renders all three buttons', () => {
    expect(screen.getAllByRole('button').length).toBe(3)
  })

  it('renders all buttons with the correct text', () => {
    expect(screen.getAllByRole('button')[0].textContent).toMatch('-')
    expect(screen.getAllByRole('button')[1].textContent).toMatch('+')
    expect(screen.getAllByRole('button')[2].textContent).toMatch(/add to cart/i)
  })

  it('increases quantity by 1 after button click', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('button', {name: '+'})
    await user.click(button)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()
  })

  it('decreases quantity by 1 after button click, if quantity > 0', async () => {
    const user = userEvent.setup()
    const increaseBtn = screen.getByRole('button', {name: '+'})
    const decreaseBtn = screen.getByRole('button', {name: '-'})
    await user.tripleClick(increaseBtn)
    await user.click(decreaseBtn)
    expect(screen.getByDisplayValue('2')).toBeInTheDocument()
  })

  it('checks initial value of 0 and updates when user types', async () => {
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('0')
    await user.type(input, '7')
    expect(input).toHaveValue('7')
  })
})

describe('Shop item form calls onSubmit as expected', () => {
  it('calls onSubmit with correct arguments when form submitted', async () => {
    const mockSubmit = vi.fn()
    render(<ItemForm itemId='123' price={35.50} onSubmit={mockSubmit} />)
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    const submitBtn = screen.getByRole('button', { name: 'Add to Cart' })
    await user.clear(input)
    await user.type(input, '3')
    await user.click(submitBtn)
    expect(mockSubmit).toHaveBeenCalledWith('123', 35.50, 3)
    expect(input).toHaveValue('0')
  })

  it('does not call onSubmit when value is 0', async() => {
    const mockSubmit = vi.fn()
    render(<ItemForm itemId='123' price={35.50} onSubmit={mockSubmit} />)
    const user = userEvent.setup()
    const submitBtn = screen.getByRole('button', { name: 'Add to Cart' })
    await user.click(submitBtn)
    expect(mockSubmit).not.toHaveBeenCalled()
  })
})
