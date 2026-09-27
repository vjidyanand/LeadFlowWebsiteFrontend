import { ArrowRight, Bot, CheckCircle2, UserRoundCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { automationFeatures } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

const categoryVariants = {
  "AI assistance": "ai",
  "Team workflow": "neutral",
  "Manager visibility": "success",
} as const

export function AIAutomation() {
  return (
    <section id="ai-assistance" aria-labelledby="automation-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            id="automation-title"
            eyebrow="AI-assisted workflows"
            title="AI assistance designed for the real estate sales workflow."
            description="Use practical assistance to keep lead context, prioritization, follow-up, and manager attention easier to handle—without removing human judgment from the process."
          />
          <Card className="border-violet-200 bg-violet-50 p-6">
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-violet-700 shadow-sm">
                <Bot aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-violet-950">Designed for assistance, not replacement</h3>
                <p className="mt-2 text-sm leading-6 text-violet-900/80">
                  People remain accountable for buyer conversations, decisions, and the quality of every customer interaction.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {automationFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <Card className="group p-5 transition-shadow hover:shadow-[0_4px_8px_-2px_rgba(16,24,40,0.10)]" key={feature.title}>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <Badge variant={categoryVariants[feature.category]}>{feature.category}</Badge>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-slate-50 p-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-violet-50 text-violet-700">
              <Bot aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">AI surfaces context</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Signals, history, and next-step suggestions.</p>
            </div>
          </div>
          <ArrowRight aria-hidden="true" className="hidden size-5 text-slate-400 sm:block" />
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary">
              <UserRoundCheck aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Owner reviews and acts</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">A relevant action stays with the sales team.</p>
            </div>
          </div>
          <ArrowRight aria-hidden="true" className="hidden size-5 text-slate-400 sm:block" />
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
              <CheckCircle2 aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Next step stays visible</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">The workflow keeps momentum and accountability.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
