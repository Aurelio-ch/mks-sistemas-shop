import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { QueryProvider } from '@/context/query-context'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'MK Sistema Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <QueryProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  )
}
