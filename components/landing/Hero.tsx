import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  MessageSquareText,
  UsersRound,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { primaryCta, secondaryCta } from "@/lib/constants"

const heroFlow = [
  { label: "Property enquiry", icon: Building2, tone: "bg-blue-50 text-primary" },
  { label: "AI-assisted next step", icon: Bot, tone: "bg-violet-50 text-violet-700" },
  { label: "Sales conversation", icon: UsersRound, tone: "bg-slate-100 text-slate-700" },
  { label: "Booking progress", icon: CalendarCheck2, tone: "bg-emerald-50 text-emerald-700" },
] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-blue-50/70 via-background to-background">
      <Container>
        <div className="grid gap-12 py-[72px] lg:grid-cols-[minmax(0,0.92fr)_minmax(480px,1.08fr)] lg:items-center lg:gap-14 lg:py-28">
          <div className="max-w-2xl">
            <Badge className="border-blue-200 bg-blue-50 text-primary" variant="outline">
              AI-assisted real estate lead management
            </Badge>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.08] lg:text-6xl">
              Turn more real estate leads into property bookings.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Bring property enquiries, AI-assisted workflows, and your sales team
              into one connected flow. Help your team qualify leads, prioritize next
              steps, follow up with context, and guide buyers toward a booking.
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              Built for real estate developers, agencies, and sales teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 aria-hidden="true" className="size-5 text-emerald-700" />
              <span>Human-led sales. AI-assisted execution.</span>
            </div>
          </div>

          <div aria-label="Illustrative lead-to-booking workflow" className="relative">
            <Card className="relative overflow-hidden border-slate-200 bg-card p-4 shadow-[0_12px_24px_-12px_rgba(16,24,40,0.18)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Lead flow workspace</p>
                  <p className="mt-1 text-sm text-muted-foreground">Illustrative workflow view</p>
                </div>
                <Badge variant="ai">AI assistance active</Badge>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {heroFlow.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <div
                      className="relative rounded-xl border border-border bg-background p-4"
                      key={step.label}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${step.tone}`}>
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{step.label}</p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            {index === 0
                              ? "Captured with source context"
                              : index === 1
                                ? "Priority and task suggested"
                                : index === 2
                                  ? "Owner engages the buyer"
                                  : "Stage and next action visible"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-4">
                <div className="flex gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-violet-700 shadow-sm">
                    <MessageSquareText aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-violet-950">Recommended next action</p>
                    <p className="mt-1 text-sm leading-6 text-violet-900/80">
                      Review the buyer’s requirements, then prepare a relevant follow-up.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
