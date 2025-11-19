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
  title: 'Trust Reach Club — Grow Your Business Faster With the Power of Community',
  description: 'Join a free, member-driven community that boosts reach, engagement, and rewards for small businesses.',
  metadataBase: new URL('https://trustreach.club'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trust Reach Club — Grow Your Business Faster With the Power of Community',
    description: 'Join a free, member-driven community that boosts reach, engagement, and rewards for small businesses.',
    url: 'https://trustreach.club',
    siteName: 'Trust Reach Club',
    type: 'website',
    images: [
      {
        url: 'https://trustreach.club/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trust Reach Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Reach Club — Grow Your Business Faster With the Power of Community',
    description: 'Join a free, member-driven community that boosts reach, engagement, and rewards for small businesses.',
    images: ['https://trustreach.club/images/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
