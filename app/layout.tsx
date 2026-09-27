import React from "react"
import type { Metadata } from 'next'

import './globals.css'
import { landingMetadata } from '@/lib/seo'

export const metadata: Metadata = landingMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
