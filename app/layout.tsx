import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'FARATECH — Engineering Mobility Excellence',
  description:
    'FARATECH designs and manufactures premium wheelchair systems trusted by hospitals, rehabilitation centers, and individuals across 60+ countries. German engineering precision meets human-centered design.',
  keywords: [
    'wheelchair',
    'premium wheelchair',
    'rehabilitation equipment',
    'power wheelchair',
    'active wheelchair',
    'mobility solutions',
    'FARATECH',
    'German engineering',
  ],
  openGraph: {
    title: 'FARATECH — Engineering Mobility Excellence',
    description:
      'Premium wheelchair systems trusted by hospitals and rehabilitation centers worldwide.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
