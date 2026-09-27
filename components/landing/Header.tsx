import { Menu } from "lucide-react"

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import {
  navigationItems,
  primaryCta,
  siteConfig,
} from "@/lib/constants"
import Image from "next/image"

function Brand() {
  return (
    <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-lg font-bold tracking-[-0.02em] text-foreground focus-visible:outline-none">
      <div className="relative size-20 shrink-0">
        <Image src="/logofr.png" alt="LeadFlow CRM" fill className="relative size-20" />
      </div>
      <span>{siteConfig.name}</span>
    </Link>
  )
}
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <a
        className="sr-only left-4 top-4 z-[60] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 lg:min-h-[72px]">
          <Brand />

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <a
                className="rounded-md px-1 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild>
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
          </div>

          <div className="hidden min-[390px]:block lg:hidden">
            <Button asChild size="sm">
              <a href={primaryCta.href}>Book demo</a>
            </Button>
          </div>

          <details className="group lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-input bg-card text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" className="size-5 group-open:hidden" />
              <span className="sr-only">Open navigation menu</span>
              <span
                aria-hidden="true"
                className="hidden text-xl font-semibold leading-none group-open:block"
              >
                ×
              </span>
            </summary>
            <div className="absolute inset-x-0 top-full border-b border-border bg-card shadow-[0_12px_24px_-4px_rgba(16,24,40,0.12)]">
              <Container className="py-4">
                <nav aria-label="Mobile navigation" className="grid gap-1">
                  {navigationItems.map((item) => (
                    <a
                      className="rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-accent"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button asChild className="mt-3 w-full">
                    <a href={primaryCta.href}>{primaryCta.label}</a>
                  </Button>
                </nav>
              </Container>
            </div>
          </details>
        </div>
      </Container>
    </header>
  )
}
