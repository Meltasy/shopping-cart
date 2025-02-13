import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShopItem from './ShopItem'

describe('Shop item component', () => {
  it('renders shop product items', () => {
    render(<ShopItem imageUrl='fakeProduct.jpg' title='Fake product' price={35.50} />)
    const { container } = render(<ShopItem />)
    expect(container).toMatchSnapshot()
  })

  it('renders correct shop item details when found', () => {
    render(<ShopItem imageUrl='fakeProduct.jpg' title='Fake product' price={35.50} />)
    screen.debug()
    expect(screen.getAllByRole('img', { hidden: true })[0]).toHaveAttribute('src', 'fakeProduct.jpg')
    expect(screen.getByRole('heading', { hidden: true, level: 3 })).toHaveTextContent('Fake product €35.50')
  })

  it('does not render shop item details when not found', () => {
    render(<ShopItem imageUrl='fakeProduct.jpg' title='Fake product' price={57.99} />)
    expect(screen.queryByText('€57.99')).not.toBeInTheDocument()
  })
})

describe('Shop item component detail buttons', () => {
  it('renders all two buttons', () => {
    render(<ShopItem />)
    expect(screen.getAllByRole('button').length).toBe(4)
  })

  it('renders all buttons for the DetailItem dialog', () => {
    render(<ShopItem onClick={() => {}} />)
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    const backBtn = screen.getByRole('button', { hidden: true, name: 'Back to Shop' })
    expect(showBtn).toBeInTheDocument()
    expect(backBtn).toBeInTheDocument()
  })

  it('renders all buttons with the correct text', () => {
    render(<ShopItem />)
    expect(screen.getAllByRole('button')[0].textContent).toMatch('Show Detail')
    expect(screen.getAllByRole('button', { hidden: true })[1].textContent).toMatch('Back to Shop')
  })

  it('renders the DetailItem dialog when button clicked', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<ShopItem />)
    const user = userEvent.setup()
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
  })

  it('closes the DetailItem dialog when button clicked', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<ShopItem />)
    const user = userEvent.setup()
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
    const backBtn = screen.getByRole('button', { hidden: true, name: 'Back to Shop' })
    await user.click(backBtn)
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled()
  })
})
