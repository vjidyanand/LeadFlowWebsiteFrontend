import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL
const metadataBase = configuredSiteUrl
  ? new URL(configuredSiteUrl.startsWith("http") ? configuredSiteUrl : `https://${configuredSiteUrl}`)
  : undefined

export const landingMetadata: Metadata = {
  metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/logofr.png",
    shortcut: "/logofr.png",
    apple: "/logofr.png",
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
    type: "website",
    images: [{ url: "/logofr11.png", alt: "TrackLead logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/logofr11.png", alt: "TrackLead logo" }],
  },
}
