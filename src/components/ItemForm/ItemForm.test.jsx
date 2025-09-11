import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ItemForm from './ItemForm'

describe('Shop item form component', () => {
  it('renders shop item form', () => {
    const { container } = render(<ItemForm />)
    expect(container).toMatchSnapshot()
  })

  it('renders input for form', () => {
    render(<ItemForm />)
    screen.debug()
    expect(screen.getByRole('textbox'))
  })

  it('renders all three buttons', () => {
    render(<ItemForm />)
    expect(screen.getAllByRole('button').length).toBe(3)
  })

  it('renders all buttons with the correct text', () => {
    render(<ItemForm />)
    expect(screen.getAllByRole('button')[0].textContent).toMatch('-')
    expect(screen.getAllByRole('button')[1].textContent).toMatch('+')
    expect(screen.getAllByRole('button')[2].querySelector('svg')).toBeInTheDocument()
  })

  it('increases quantity by 1 after button click', async () => {
    render(<ItemForm />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', {name: '+'})
    await user.click(button)
    expect(screen.getByDisplayValue('2')).toBeInTheDocument()
  })

  it('decreases quantity by 1 after button click, if quantity > 0', async () => {
    render(<ItemForm />)
    const user = userEvent.setup()
    const increaseBtn = screen.getByRole('button', {name: '+'})
    const decreaseBtn = screen.getByRole('button', {name: '-'})
    await user.tripleClick(increaseBtn)
    await user.click(decreaseBtn)
    expect(screen.getByDisplayValue('3')).toBeInTheDocument()
  })

  it('checks initial value of 1 and updates when user types', async () => {
    render(<ItemForm />)
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
    await user.type(input, '7')
    expect(input).toHaveValue('7')
  })
})

describe('Shop item form calling onSubmit', () => {
  it('calls onSubmit with correct arguments when form submitted', async () => {
    const mockSubmit = vi.fn()
    render(<ItemForm itemId='123' price={35.50} onSubmit={mockSubmit} />)
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    const submitBtn = screen.getAllByRole('button')[2]
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
    const input = screen.getByRole('textbox')
    const submitBtn = screen.getAllByRole('button')[2]
    await user.clear(input)
    await user.type(input, '0')
    await user.click(submitBtn)
    expect(mockSubmit).not.toHaveBeenCalled()
  })
})
