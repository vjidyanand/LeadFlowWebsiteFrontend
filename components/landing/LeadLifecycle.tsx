import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { lifecycleStages } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function LeadLifecycle() {
  return (
    <section id="how-it-works" aria-labelledby="lifecycle-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="lifecycle-title"
          eyebrow="How it works"
          title="A clearer path from first enquiry to booking progress."
          description="This illustrative workflow shows how AI assistance and human sales expertise can work together throughout the lead journey."
          centered
        />
        <ol className="relative mt-12 grid gap-4 border-l border-blue-200 pl-6 sm:grid-cols-2 sm:border-l-0 sm:pl-0 lg:grid-cols-3">
          {lifecycleStages.map((stage, index) => {
            const Icon = stage.icon

            return (
              <li className="relative" key={stage.title}>
                <span className="absolute -left-[35px] top-6 grid size-5 place-items-center rounded-full border-4 border-background bg-primary sm:hidden" />
                <Card className="h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="neutral">Step {index + 1}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.description}</p>
                  <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
                    <div>
                      <dt className="font-semibold text-violet-800">AI assistance</dt>
                      <dd className="mt-1 leading-5 text-muted-foreground">{stage.ai}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Sales team</dt>
                      <dd className="mt-1 leading-5 text-muted-foreground">{stage.team}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-emerald-800">Outcome</dt>
                      <dd className="mt-1 leading-5 text-muted-foreground">{stage.outcome}</dd>
                    </div>
                  </dl>
                </Card>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
