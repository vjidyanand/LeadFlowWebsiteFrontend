import type { Metadata } from "next"

import { siteConfig } from "@/lib/constants"

export const landingMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
}
