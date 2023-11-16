import { useCart } from '@/context/cart-context'
import * as Dialog from '@radix-ui/react-dialog'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
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
  const { items, decreaseQuantity, increaseQuantity, removeProduct } = useCart()

  function handleToDecrease(id: number) {
    decreaseQuantity(id)
  }

  function handleToIncrease(id: number) {
    increaseQuantity(id)
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }

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
            {items.map((item) => {
              return (
                <ProductCart key={item.id}>
                  <ProductCartHeader>
                    <Image width={150} height={150} src={item.photo} alt="" />
                    <p>Headset Cloud Stinger</p>
                  </ProductCartHeader>

                  <ProductCartQuantity>
                    <span>Qtd:</span>
                    <div>
                      <button
                        type="button"
                        disabled={item.quantity === 1}
                        onClick={() => handleToDecrease(item.id)}
                      >
                        <Minus size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleToIncrease(item.id)}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </ProductCartQuantity>

                  <span className="price">{item.price}</span>
                  <button
                    className="delete-product"
                    onClick={() => handleRemoveProduct(item.id)}
                  >
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
