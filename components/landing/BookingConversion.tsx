import { ArrowRight, CalendarCheck2, CheckCircle2, UserRoundCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { bookingStages, primaryCta } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function BookingConversion() {
  return (
    <section id="booking-conversion" aria-labelledby="booking-title" className="scroll-mt-8 py-10 sm:py-20 lg:py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              id="booking-title"
              eyebrow="Booking conversion"
              title="Make booking opportunities visible before they are missed."
              description="Keep the sales pipeline connected to ownership, activity, and next actions—so the team can see where a buyer is and what needs to happen next."
            />
            <Button asChild className="mt-7">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
          </div>

          <Card className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Lead-to-booking journey</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative, configurable workflow stages</p>
              </div>
              <Badge variant="success">Booking progress visible</Badge>
            </div>
            <ol className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
              {bookingStages.map((stage, index) => (
                <li className="flex items-center gap-3 rounded-xl border border-border bg-background p-3" key={stage}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{stage}</span>
                  {index < bookingStages.length - 1 ? (
                    <ArrowRight aria-hidden="true" className="ml-auto hidden size-4 text-slate-400 lg:block" />
                  ) : null}
                </li>
              ))}
            </ol>
            <div className="grid gap-4 border-t border-border bg-slate-50 p-5 sm:grid-cols-3 sm:p-6">
              <div className="flex gap-3">
                <UserRoundCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <div><p className="text-sm font-semibold text-foreground">Owner</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Keep responsibility clear at every stage.</p></div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emerald-700" />
                <div><p className="text-sm font-semibold text-foreground">Recent activity</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Review what has happened with the buyer.</p></div>
              </div>
              <div className="flex gap-3">
                <CalendarCheck2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-violet-700" />
                <div><p className="text-sm font-semibold text-foreground">Next action</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Give the team a clear opportunity to progress.</p></div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
