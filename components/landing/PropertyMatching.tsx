import { ArrowRight, Bot, CheckCircle2, House } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { matchingCriteria } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

const suggestedOptions = [
  { title: "Option A", detail: "2-bedroom · preferred location area", reason: "Matches available budget and configuration context" },
  { title: "Option B", detail: "3-bedroom · nearby project area", reason: "Supports stated timing and family requirements" },
] as const

export function PropertyMatching() {
  return (
    <section id="property-matching" aria-labelledby="matching-title" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="matching-title"
          eyebrow="Property matching"
          title="Turn buyer context into more relevant property conversations."
          description="Use the details available in the lead flow to help your team prepare better options. Suggestions inform the sales conversation; your team makes the recommendation."
          centered
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-primary">
                <House aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Buyer context</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative inputs used to inform a conversation</p>
              </div>
            </div>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {matchingCriteria.map((criterion) => {
                const Icon = criterion.icon

                return (
                  <li className="flex gap-3" key={criterion.title}>
                    <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{criterion.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{criterion.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>

          <Card className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Suggested property options</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative AI-assisted matching view</p>
              </div>
              <Badge variant="ai"><Bot aria-hidden="true" className="size-3" /> AI assistance</Badge>
            </div>
            <div className="grid gap-4 p-5 sm:p-6 md:grid-cols-2">
              {suggestedOptions.map((option) => (
                <article className="rounded-xl border border-border bg-background p-5" key={option.title}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary">
                      <House aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="success">Relevant option</Badge>
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{option.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{option.detail}</p>
                  <div className="mt-5 flex gap-2 rounded-lg bg-emerald-50 p-3 text-sm leading-6 text-emerald-900">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    <p>{option.reason}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-border p-5 text-sm text-muted-foreground sm:p-6">
              <ArrowRight aria-hidden="true" className="size-4 text-primary" />
              Sales representatives validate fit and make the final recommendation.
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
