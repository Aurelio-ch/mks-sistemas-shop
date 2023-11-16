import Home from '@/app/(home)/page'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

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
        addToCart: jest.fn(),
      }
    },
  }
})

jest.mock('react-query', () => {
  return {
    useQuery() {
      return {
        isLoading: false,
        data: {
          products: [
            {
              id: 1,
              name: 'Mocked Product',
              price: 10.0,
              description: 'mocked product description',
              photo:
                'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            },
          ],
        },
        error: false,
      }
    },
  }
})

describe('Home Page', () => {
  it('renders correctly', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    })
  })

  it('Clicking Buy adds product to cart', async () => {
    render(<Home />)

    await waitFor(() => {
      const clickButton = fireEvent.click(screen.getByAltText('Comprar'))

      expect(clickButton).toHaveBeenCalled()
    })
  })
})
