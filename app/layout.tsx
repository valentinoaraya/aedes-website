import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aedes Tech',
  description: 'Created by Aedes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
