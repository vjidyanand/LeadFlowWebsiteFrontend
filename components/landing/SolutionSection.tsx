import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { secondaryCta, solutionPillars } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function SolutionSection() {
  return (
    <section aria-labelledby="solution-title" className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            id="solution-title"
            eyebrow="One connected system"
            title="One lead flow for your team, with AI assistance at every useful step."
            description="Lead management, sales execution, and manager visibility work together—so your team can focus on better conversations, not disconnected tools."
          />
          <div className="flex lg:justify-end">
            <Button asChild variant="outline">
              <a href={secondaryCta.href}>
                {secondaryCta.label}
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutionPillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <Card className="relative overflow-hidden p-6 sm:p-8" key={pillar.title}>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="neutral">0{index + 1}</Badge>
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {pillar.description}
                </p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
