import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { navigationItems, primaryCta, siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10 sm:py-12">
      <Container>
        <div className="grid gap-8 border-b border-border pb-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <a className="inline-flex items-center gap-2 rounded-lg text-lg font-bold tracking-[-0.02em] text-foreground" href="#main-content">
              <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">L</span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              AI-assisted lead flow management for real estate sales teams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
            {navigationItems.map((item) => (
              <a className="rounded-md font-semibold text-muted-foreground hover:text-foreground" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a className="inline-flex items-center gap-1 rounded-md font-semibold text-primary hover:text-primary/80" href={primaryCta.href}>
              {primaryCta.label} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <p className="pt-6 text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
