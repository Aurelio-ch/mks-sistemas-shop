import { Dialog } from '@radix-ui/react-dialog'
import { render, screen } from '@testing-library/react'
import { Cart } from '.'

jest.mock('@/context/cart-context', () => {
  return {
    useCart() {
      return {
        items: [
          {
            id: 1,
            name: 'Mocked Product',
            price: 10.0,
            photo:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            quantity: 1,
          },
        ],
      }
    },
  }
})

describe('Cart Components', () => {
  it('renders correctly', async () => {
    render(
      <Dialog open={true}>
        <Cart />
      </Dialog>,
    )

    expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    expect(screen.getByText(1)).toBeInTheDocument()
  })
})
