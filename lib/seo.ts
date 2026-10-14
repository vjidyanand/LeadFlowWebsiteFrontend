import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"

export const landingMetadata: Metadata = {
  metadataBase: new URL("https://trackleadcrm.com"),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "real estate lead management software",
    "real estate CRM",
    "AI real estate CRM",
    "real estate sales automation",
    "property sales CRM",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://trackleadcrm.com/",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/logofr11.png",
        width: 1426,
        height: 1103,
        alt: "TrackLead real estate CRM logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logofr11.png"],
  },
}
