import { BellRing, Bot, ChevronRight, LayoutDashboard, ListChecks, UsersRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"

const sampleKpis = [
  { label: "Total leads", value: "128", note: "Illustrative sample" },
  { label: "Priority review", value: "18", note: "Needs team attention" },
  { label: "Follow-ups", value: "24", note: "Visible next actions" },
  { label: "Booking progress", value: "9", note: "Tracked opportunities" },
] as const

const samplePipeline = [
  { label: "New enquiry", width: "100%", tone: "bg-blue-500" },
  { label: "Qualification", width: "78%", tone: "bg-blue-400" },
  { label: "Engagement", width: "58%", tone: "bg-violet-500" },
  { label: "Site visit", width: "36%", tone: "bg-amber-500" },
  { label: "Booking progress", width: "22%", tone: "bg-emerald-600" },
] as const

export function DashboardPreview() {
  return (
    <section id="product-preview" aria-labelledby="dashboard-title" className="scroll-mt-8 bg-slate-50 py-10 sm:py-20 lg:py-10">
      <Container>
        <SectionHeading
          id="dashboard-title"
          eyebrow="Product dashboard"
          title="A single view of the work that moves the pipeline."
          description="Bring lead context, team activity, next actions, and booking progress closer together—without turning daily work into another disconnected dashboard."
          centered
        />

        <Card className="mt-10 overflow-hidden border-slate-300 shadow-[0_12px_24px_-12px_rgba(16,24,40,0.18)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <LayoutDashboard aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">LeadFlow workspace</p>
                <p className="mt-1 text-xs text-muted-foreground">Illustrative sample workspace — not customer data or performance results</p>
              </div>
            </div>
            <Badge variant="neutral">Manager view</Badge>
          </div>

          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="hidden border-r border-border bg-slate-50 p-4 lg:block">
              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Workspace</p>
              <nav aria-label="Illustrative product navigation" className="grid gap-1 text-sm">
                <span className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 font-semibold text-primary"><LayoutDashboard aria-hidden="true" className="size-4" /> Overview</span>
                <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground"><ListChecks aria-hidden="true" className="size-4" /> Lead queue</span>
                <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground"><UsersRound aria-hidden="true" className="size-4" /> Team activity</span>
                <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground"><Bot aria-hidden="true" className="size-4" /> AI assistance</span>
              </nav>
            </aside>

            <div className="min-w-0 p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {sampleKpis.map((kpi) => (
                  <div className="rounded-xl border border-border bg-background p-4" key={kpi.label}>
                    <p className="text-xs font-semibold text-muted-foreground">{kpi.label}</p>
                    <p className="mt-3 font-mono text-2xl font-semibold tracking-[-0.03em] text-foreground">{kpi.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{kpi.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Lead pipeline</p>
                      <p className="mt-1 text-xs text-muted-foreground">Illustrative stage distribution</p>
                    </div>
                    <Badge variant="neutral">This week</Badge>
                  </div>
                  <div className="mt-6 space-y-4" role="img" aria-label="Illustrative lead pipeline with five stages">
                    {samplePipeline.map((stage) => (
                      <div className="grid grid-cols-[120px_minmax(0,1fr)] items-center gap-3" key={stage.label}>
                        <span className="truncate text-xs font-medium text-muted-foreground">{stage.label}</span>
                        <span className="block h-2 overflow-hidden rounded-full bg-slate-100">
                          <span className={`block h-full rounded-full ${stage.tone}`} style={{ width: stage.width }} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Priority queue</p>
                      <p className="mt-1 text-xs text-muted-foreground">Work that needs review</p>
                    </div>
                    <BellRing aria-hidden="true" className="size-5 text-amber-700" />
                  </div>
                  <ul className="mt-5 space-y-3">
                    {["Review buyer requirements", "Confirm next follow-up", "Prepare property options"].map((item, index) => (
                      <li className="flex items-center gap-3 rounded-lg bg-slate-50 p-3" key={item}>
                        <span className="grid size-7 place-items-center rounded-full bg-white text-xs font-bold text-primary shadow-sm">{index + 1}</span>
                        <span className="min-w-0 flex-1 text-sm font-medium text-foreground">{item}</span>
                        <ChevronRight aria-hidden="true" className="size-4 text-slate-400" />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-lg border border-violet-200 bg-violet-50 p-3">
                    <div className="flex items-start gap-2">
                      <Bot aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet-700" />
                      <p className="text-xs leading-5 text-violet-900">AI-assisted next action: review the available buyer context before the next conversation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
