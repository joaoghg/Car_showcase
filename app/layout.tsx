import './globals.css'
import type { Metadata } from 'next'
import {Footer, Navbar} from "@/components";


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Descubra os melhores carros do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
