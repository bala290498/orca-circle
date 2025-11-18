import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/contexts/ModalContext'
import Header from '@/components/Header'
import AnnouncementBanner from '@/components/AnnouncementBanner'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orca Circle — Grow Your Business Faster With the Power of Community',
  description: 'Join a free, member-driven community that boosts reach, engagement, and rewards for small businesses.',
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
          <AnnouncementBanner />
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
