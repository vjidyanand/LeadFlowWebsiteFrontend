import { ArrowRight, Network } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { integrationCategories, primaryCta } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function Integrations() {
  return (
    <section id="integrations" aria-labelledby="integrations-title" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            id="integrations-title"
            eyebrow="Lead sources & integrations"
            title="Bring the sources your team uses into a clearer lead flow."
            description="Start with the lead sources and business systems that matter to your team. Available connections and setup requirements should be confirmed for your workflow."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {integrationCategories.map((category) => {
              const Icon = category.icon

              return (
                <Card className="p-5" key={category.title}>
                  <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex gap-3">
            <Network aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Start with your existing operating context.</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Discuss lead sources, data flows, and the systems your sales team relies on today.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="shrink-0 bg-white">
            <a href={primaryCta.href}>Discuss your lead sources <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </Container>
    </section>
  )
}
