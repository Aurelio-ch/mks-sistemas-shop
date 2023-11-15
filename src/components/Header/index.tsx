'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Cart } from '../cart'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src="/logo.png"
        width={200}
        height={45.83}
        alt="logo MKS Sistemas Shop"
      />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <ShoppingCart />
            <span>0</span>
          </button>
        </Dialog.Trigger>

        <Cart />
      </Dialog.Root>
    </HeaderContainer>
  )
}
