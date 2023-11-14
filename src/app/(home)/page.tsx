'use client'
import { ShoppingBag } from 'lucide-react'
import { useQuery } from 'react-query'
import {
  Container,
  Product,
  ProductContainer,
  ProductDetails,
  ProductImage,
} from './styles'

export interface Product {
  id: number
  name: string
  description: string
  photo: string
  price: string
}

export default function Home() {
  const { data, isLoading, error } = useQuery('Products', async () => {
    const response = await fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )
    const data = await response.json()

    return data
  })

  return (
    <Container>
      <ProductContainer>
        {isLoading ? (
          <h1>carregando...</h1>
        ) : error ? (
          <h1>error😢😢</h1>
        ) : (
          data.products.map((product: Product) => {
            return (
              <Product key={product.id}>
                <ProductImage
                  src={product.photo}
                  width={500}
                  height={500}
                  alt=""
                  quality={100}
                />
                <ProductDetails>
                  <div>
                    <h1>{product.name}</h1>
                    <span>
                      {parseFloat(product.price).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                  <p>{product.description}</p>
                </ProductDetails>
                <button>
                  <ShoppingBag />
                  Comprar
                </button>
              </Product>
            )
          })
        )}
      </ProductContainer>
    </Container>
  )
}
