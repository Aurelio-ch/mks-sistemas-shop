'use client'
import { ShoppingBag } from 'lucide-react'
import {
  Container,
  Product,
  ProductContainer,
  ProductDetails,
  ProductImage,
} from './styles'

export default function Home() {
  const gerarProduct = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Container>
      <ProductContainer>
        {gerarProduct.map((product) => {
          return (
            <Product key={product}>
              <ProductImage
                src="/apple-watch.png"
                width={500}
                height={500}
                alt=""
                quality={100}
              />
              <ProductDetails>
                <div>
                  <h1>Apple Watch Series 4 GPS</h1>
                  <span>R$399</span>
                </div>
                <p>Redesigned from scratch and completely revised. </p>
              </ProductDetails>
              <button>
                <ShoppingBag />
                Comprar
              </button>
            </Product>
          )
        })}
      </ProductContainer>
    </Container>
  )
}
