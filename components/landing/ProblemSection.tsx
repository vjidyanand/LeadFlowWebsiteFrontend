import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { problemItems } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="problem-title"
          eyebrow="The operational challenge"
          title="When lead follow-up is fragmented, booking opportunities can be hard to see."
          description="Property sales teams need more than a list of enquiries. They need clear ownership, relevant buyer context, and a disciplined path for every next action."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemItems.map((item) => {
            const Icon = item.icon
            return (
              <Card className="p-6" key={item.title}>
                <span className="grid size-11 place-items-center rounded-lg bg-amber-50 text-amber-800">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
