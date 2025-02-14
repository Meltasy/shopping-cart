import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShopItem from './ShopItem'

describe('Shop item component', () => {
  it('renders shop product item', () => {
    render(<ShopItem imageUrl='fakeImage.jpg' title='Fake product' price={35.50} />)
    const { container } = render(<ShopItem />)
    expect(container).toMatchSnapshot()
  })

  it('renders correct shop item details when found', () => {
    render(<ShopItem imageUrl='fakeImage.jpg' title='Fake product' price={35.50} />)
    screen.debug()
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'fakeImage.jpg')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Fake product €35.50')
  })

  it('does not render shop item details when not found', () => {
    render(<ShopItem imageUrl='fakeImage.jpg' title='Fake product' price={57.99} />)
    expect(screen.queryByText('€57.99')).not.toBeInTheDocument()
  })
})

describe('Shop item component detail buttons', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<ShopItem />)
  })

  it('renders all buttons for the DetailItem dialog', () => {
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    const backBtn = screen.getByRole('button', { hidden: true, name: 'Back to Shop' })
    expect(showBtn).toBeInTheDocument()
    expect(backBtn).toBeInTheDocument()
  })

  it('renders all buttons with the correct text', () => {
    expect(screen.getAllByRole('button')[0].textContent).toMatch('Show Detail')
    expect(screen.getAllByRole('button', { hidden: true })[1].textContent).toMatch('Back to Shop')
  })

  it('renders the DetailItem dialog when button clicked', async () => {
    const user = userEvent.setup()
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
  })

  it('closes the DetailItem dialog when button clicked', async () => {
    const user = userEvent.setup()
    const showBtn = screen.getByRole('button', { name: 'Show Detail'})
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
    const backBtn = screen.getByRole('button', { hidden: true, name: 'Back to Shop' })
    await user.click(backBtn)
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled()
  })
})
