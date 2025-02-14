import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import DetailItem from './DetailItem';

describe('Shop item detail component', () => {
  it('does not render dialog when showDetail is false', () => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(<DetailItem showDetail={false} />)
    const dialog = screen.getByRole('dialog', { hidden: true })
    expect(dialog.showModal).not.toHaveBeenCalled()
  })
})

describe('Shop item detail component', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
    render(
      <DetailItem
        showDetail={true}
        title='Fake product'
        price={35.50}
        imageUrl='fakeImage.jpg'
        description='This is a fake product.'
      />
    )
  })

  it('renders shop item detail dialog', () => {
    const { container } = render(<DetailItem />)
    expect(container).toMatchSnapshot()
  })

  it('renders dialog when showDetail is true', () => {
    screen.debug()
    const dialog = screen.getByRole('dialog', { hidden: true })
    expect(dialog.showModal).toHaveBeenCalled()
  })

  it('renders correct item details when dialog is open', () => {
    expect(screen.getByRole('heading', { hidden: true, level: 2 })).toHaveTextContent('Fake product €35.50')
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', 'fakeImage.jpg')
    expect(screen.getByText('This is a fake product.')).toBeInTheDocument()
  })
})
