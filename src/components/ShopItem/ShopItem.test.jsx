import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShopItem from './ShopItem'

describe('Shop item component', () => {
  it('renders shop product item', () => {
    const { container } = render(<ShopItem />)
    expect(container).toMatchSnapshot()
  })

  it('renders correct shop item details when found', () => {
    render(<ShopItem imageUrl='fakeImage.jpg' title='Fake product' price={35.50} />)
    screen.debug()
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'fakeImage.jpg')
    expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent('Fake product')
    expect(screen.getAllByRole('heading', { level: 3 })[1]).toHaveTextContent('€35.50')
  })

  it('does not render shop item details when not found', () => {
    render(<ShopItem imageUrl='fakeImage.jpg' title='Fake product' price={27.99} />)
    expect(screen.queryByText('€57.99')).not.toBeInTheDocument()
  })
})

describe('Shop item component detail buttons', () => {
  it('renders all buttons for the DetailItem dialog', () => {
    render(<ShopItem />)
    const showBtn = (screen.getAllByRole('button')[0])
    const backBtn = (screen.getAllByRole('button', { hidden: true })[1])
    expect(showBtn).toBeInTheDocument()
    expect(backBtn).toBeInTheDocument()
  })

  it('renders the DetailItem dialog when button clicked', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<ShopItem />)
    const user = userEvent.setup()
    const showBtn = (screen.getAllByRole('button')[0])
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
  })

  it('closes the DetailItem dialog when button clicked', async () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<ShopItem />)
    const user = userEvent.setup()
    const showBtn = (screen.getAllByRole('button')[0])
    await user.click(showBtn)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
    const backBtn = (screen.getAllByRole('button', { hidden: true })[1])
    await user.click(backBtn)
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled()
  })
})
