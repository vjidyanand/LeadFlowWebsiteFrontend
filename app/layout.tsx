import React from "react"
import type { Metadata } from 'next'

import './globals.css'
import { landingMetadata } from '@/lib/seo'

export const metadata: Metadata = landingMetadata

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trackleadcrm.com/#organization",
      name: "TrackLead",
      url: "https://trackleadcrm.com/",
      logo: "https://trackleadcrm.com/logofr11.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://trackleadcrm.com/#website",
      name: "TrackLead",
      url: "https://trackleadcrm.com/",
      publisher: {
        "@id": "https://trackleadcrm.com/#organization",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  )
}
