import { ArrowUpRight, BarChart3, Clock3, Route, UsersRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { analyticsItems } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

const activityBars = [
  {height:32, tend:"bg-blue-400"},
  {height: 48, tend:"bg-blue-500"},
  {height: 38, tend:"bg-violet-500"},
  {height: 52, tend:"bg-green-500"},
  {height: 68, tend:"bg-yellow-500"},
  {height: 88, tend:"bg-red-400"}] as const

export function Analytics() {
  return (
    <section id="analytics" aria-labelledby="analytics-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              id="analytics-title"
              eyebrow="Analytics & reporting"
              title="Know where every lead stands—and where your team can improve."
              description="Review the lead flow, follow-up coverage, team activity, and pipeline progress to make more useful sales-management conversations possible."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {analyticsItems.map((item) => {
                const Icon = item.icon

                return (
                  <div className="flex gap-3" key={item.title}>
                    <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <Card className="p-5 shadow-[0_12px_24px_-12px_rgba(16,24,40,0.18)] sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Sales activity overview</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative reporting view</p>
              </div>
              <Badge variant="neutral">Manager context</Badge>
            </div>
            <div className="mt-7 h-44 rounded-xl border border-border bg-slate-50 p-4">
              <div className="flex h-full items-end gap-2" role="img" aria-label="Illustrative activity trend bar chart">
                {activityBars.map((data, index) => (
                  <span className="flex h-full flex-1 items-end" key={index}>
                    <span className={`w-full rounded-t ${data?.tend}`} style={{ height: `${data?.height}%` }} />
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-3">
                <Route aria-hidden="true" className="size-4 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Pipeline movement</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Review stage progress over time.</p>
              </div>
              <div className="rounded-lg bg-amber-50 p-3">
                <Clock3 aria-hidden="true" className="size-4 text-amber-700" />
                <p className="mt-3 text-sm font-semibold text-foreground">Follow-up attention</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Spot work requiring a next action.</p>
              </div>
              <div className="rounded-lg bg-emerald-50 p-3">
                <UsersRound aria-hidden="true" className="size-4 text-emerald-700" />
                <p className="mt-3 text-sm font-semibold text-foreground">Team context</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Support workload and coaching reviews.</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-border pt-5 text-sm text-primary">
              <BarChart3 aria-hidden="true" className="size-4" />
              <span className="font-semibold">Explore the signals behind your sales process</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}


