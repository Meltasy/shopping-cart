import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Shop from './Shop'

const mockProductItems = [
  {
    id: '123',
    category: 'fakeCategoryA',
    image: 'fakeImageA.jpg',
    title: 'Fake product A',
    price: 35.50,
    description: 'This is fake product A.'
  }, {
    id: '321',
    category: 'fakeCategoryB',
    image: 'fakeImageB.jpg',
    title: 'Fake product B',
    price: 57.99,
    description: 'This is fake product B.'
  }, {
    id: '231',
    category: 'fakeCategoryA',
    image: 'fakeImageC.jpg',
    title: 'Fake product C',
    price: 7.50,
    description: 'This is fake product C.'
  },
]

describe('Shop component', () => {
  it('renders shop products', () => {
    const { container } = render(<Shop productItems={mockProductItems} />)
    expect(container).toMatchSnapshot()
  })

  it ('renders correct heading', () => {
    render(<Shop productItems={mockProductItems} />)
    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/products/i)
    expect(screen.getByRole('heading', { level: 1, name: 'Products' })).toBeInTheDocument()
  })

  it('renders shop products with all complete details', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<Shop productItems={mockProductItems} />)
    const user = userEvent.setup()
    const detailBtn = (screen.getAllByRole('button')[0])
    await user.click(detailBtn)
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'fakeImageA.jpg')
    expect(screen.getAllByRole('heading', { hidden: true, level: 2 })[0]).toHaveTextContent('Fake product A')
    expect(screen.getAllByRole('heading', { hidden: true, level: 2 })[1]).toHaveTextContent('€35.50')
    expect(screen.getByText('This is fake product A.')).toBeInTheDocument()
  })

  it('renders correct number of shop products', () => {
    render(<Shop productItems={mockProductItems} />)
    const productItems = screen.getAllByRole('img')
    expect(productItems).toHaveLength(mockProductItems.length)
  })

  it('renders category dropdown and filters products correctly', async () => {
    render(<Shop productItems={mockProductItems} />)
    const user = userEvent.setup()
    const dropdown = screen.getByLabelText('Choose a category:')
    const optionValues = screen.getAllByRole('option').map(opt => opt.value)
    expect(dropdown).toBeInTheDocument()
    expect(optionValues).toEqual(expect.arrayContaining(['all', 'fakeCategoryA', 'fakeCategoryB']))
    expect(screen.getAllByRole('img')).toHaveLength(mockProductItems.length)
    await user.selectOptions(dropdown, 'fakeCategoryA')
    expect(screen.getAllByRole('img')).toHaveLength(2)
    await user.selectOptions(dropdown, 'fakeCategoryB')
    expect(screen.getAllByRole('img')).toHaveLength(1)
    await user.selectOptions(dropdown, 'all')
    expect(screen.getAllByRole('img')).toHaveLength(mockProductItems.length)
  })

  it('calls handleAdd on shop product forms', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    const mockAdd = vi.fn()
    render(<Shop productItems={mockProductItems} handleAdd={mockAdd} />)
    const user = userEvent.setup()
    const addBtn = (screen.getAllByRole('button').find(btn => btn.getAttribute('type') === 'submit'))
    await user.click(addBtn)
    expect(mockAdd).toHaveBeenCalled()
  })
})
