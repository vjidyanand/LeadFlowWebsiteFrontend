import { ArrowRight, Bot, Handshake, ShieldCheck, UsersRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"

const collaborationSteps = [
  "AI detects an opportunity",
  "AI recommends an action",
  "Employee engages the buyer",
  "AI assists the next step",
  "Customer progresses",
  "Booking progress stays visible",
] as const

export function AIHumanSection() {
  return (
    <section aria-labelledby="ai-human-title" className="bg-slate-950 py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-300">AI + human collaboration</p>
            <h2 id="ai-human-title" className="mt-3 text-balance text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              AI keeps the workflow moving. Your sales team builds the trust.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Automation handles repetitive, time-sensitive, and data-driven work.
              Your people apply market knowledge, empathy, judgment, and negotiation
              where it matters most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-violet-400/30 bg-slate-900 p-6 text-slate-100">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-violet-500/20 text-violet-200">
                  <Bot aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-semibold">AI assists</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>Organizes available lead context and history.</li>
                <li>Surfaces priority signals and useful next steps.</li>
                <li>Supports follow-up, property suggestions, and reviewed drafts.</li>
              </ul>
            </Card>
            <Card className="border-blue-400/30 bg-slate-900 p-6 text-slate-100">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-blue-500/20 text-blue-200">
                  <UsersRound aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-semibold">People lead</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>Build relationships and validate buyer needs.</li>
                <li>Handle site visits, complex questions, and objections.</li>
                <li>Own negotiation, judgment, and the booking conversation.</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Handshake aria-hidden="true" className="size-5 text-emerald-300" />
              <p className="font-semibold text-white">A handoff model built for sales execution</p>
            </div>
            <Badge className="border-slate-700 bg-slate-800 text-slate-200" variant="outline">
              Human accountability remains central
            </Badge>
          </div>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {collaborationSteps.map((step, index) => (
              <li className="flex items-center gap-3 lg:block" key={step}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-800 text-xs font-bold text-blue-200">
                  {index + 1}
                </span>
                <p className="mt-0 text-sm leading-5 text-slate-300 lg:mt-3">{step}</p>
                {index < collaborationSteps.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="ml-auto hidden size-4 text-slate-500 lg:mt-4 lg:block" />
                ) : null}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-center gap-2 border-t border-slate-700 pt-5 text-sm text-slate-300">
            <ShieldCheck aria-hidden="true" className="size-5 text-emerald-300" />
            Automation supports the process; people remain responsible for buyer conversations and decisions.
          </div>
        </div>
      </Container>
    </section>
  )
}
