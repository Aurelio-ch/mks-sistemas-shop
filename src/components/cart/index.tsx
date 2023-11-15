import * as Dialog from '@radix-ui/react-dialog'
import { Minus, Plus, X } from 'lucide-react'
import Link from 'next/link'
import {
  CartContainer,
  CartInfo,
  HeaderCart,
  ProductCart,
  ProductCartHeader,
  ProductCartQuantity,
  ProductsContainerCart,
  ResumeCart,
} from './styles'

export function Cart() {
  const gerarProduct = [1, 2, 3, 4, 5, 6]

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <CartContainer>
        <CartInfo>
          <HeaderCart>
            <span>Carrinho de Compras</span>
            <Dialog.Close asChild>
              <button>
                <X size={18} />
              </button>
            </Dialog.Close>
          </HeaderCart>

          <ProductsContainerCart>
            {gerarProduct.map((product) => {
              return (
                <ProductCart key={product}>
                  <ProductCartHeader>
                    <img src="apple-watch.png" alt="" />
                    <p>Headset Cloud Stinger</p>
                  </ProductCartHeader>

                  <ProductCartQuantity>
                    <span>Qtd:</span>
                    <div>
                      <button>
                        <Minus size={13} />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus size={13} />
                      </button>
                    </div>
                  </ProductCartQuantity>

                  <span className="price">R$399</span>
                  <button className="delete-product">
                    <X size={13} />
                  </button>
                </ProductCart>
              )
            })}
          </ProductsContainerCart>

          <ResumeCart>
            <span>Total:</span>
            <span>RS300</span>
          </ResumeCart>
        </CartInfo>
        <Link href="/">Finalizar Compras</Link>
      </CartContainer>
    </Dialog.Portal>
  )
}
