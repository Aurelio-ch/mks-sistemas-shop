'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
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
      <div>
        <ShoppingCart />
        <span>0</span>
      </div>
    </HeaderContainer>
  )
}
