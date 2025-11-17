import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/contexts/ModalContext'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orca Circle - Grow Your Business With Community Power',
  description: 'Instant reach, real engagement, and unlimited rewards — all driven by an active community that supports your business every day.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
