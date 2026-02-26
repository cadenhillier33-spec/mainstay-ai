import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mainstay AI — We install AI that runs your business',
  description: 'One visit. One installation. Your marketing, customer follow-up, and operations handled automatically — 24/7.',
  openGraph: {
    title: 'Mainstay AI',
    description: 'We install AI that runs your business.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}