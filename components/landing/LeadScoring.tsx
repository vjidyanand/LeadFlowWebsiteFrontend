import { Bot, CircleAlert, Clock3, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"

const priorityQueue = [
  {
    label: "Lead A",
    state: "High attention",
    variant: "warning" as const,
    signals: ["Recent engagement", "Buyer requirements available", "Follow-up ready"],
    nextAction: "Review requirements and prepare a relevant response.",
  },
  {
    label: "Lead B",
    state: "Follow-up due",
    variant: "ai" as const,
    signals: ["Conversation history available", "Next step needs review"],
    nextAction: "Confirm ownership and set the next follow-up action.",
  },
  {
    label: "Lead C",
    state: "Nurture",
    variant: "neutral" as const,
    signals: ["Early research stage", "Property preferences emerging"],
    nextAction: "Keep context visible for a considered future conversation.",
  },
] as const

export function LeadScoring() {
  return (
    <section id="lead-scoring" aria-labelledby="scoring-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              id="scoring-title"
              eyebrow="Lead scoring & prioritization"
              title="Help your team decide what needs attention first."
              description="AI-assisted priority signals bring engagement, available buyer requirements, current stage, and follow-up status into one view. A sales representative still decides how to act."
            />
            <div className="mt-7 flex items-start gap-3 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm leading-6 text-violet-900">
              <Bot aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-violet-700" />
              <p>
                Prioritization supports deliberate action. It is not a guarantee of conversion or a replacement for human judgment.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden shadow-[0_12px_24px_-12px_rgba(16,24,40,0.18)]">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <p className="text-sm font-semibold text-foreground">Priority queue</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative prioritization view</p>
              </div>
              <Sparkles aria-hidden="true" className="size-5 text-violet-700" />
            </div>
            <ol className="divide-y divide-border">
              {priorityQueue.map((lead, index) => (
                <li className="p-5" key={lead.label}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{lead.label}</p>
                        <p className="mt-1 text-xs text-muted-foreground">Human-reviewed priority state</p>
                      </div>
                    </div>
                    <Badge variant={lead.variant}>{lead.state}</Badge>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {lead.signals.map((signal) => (
                      <span className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-700" key={signal}>
                        {signal}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2 text-sm leading-6 text-muted-foreground">
                    {index === 1 ? (
                      <Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0 text-amber-700" />
                    ) : (
                      <CircleAlert aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                    )}
                    <p><span className="font-semibold text-foreground">Suggested next action:</span> {lead.nextAction}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Container>
    </section>
  )
}
