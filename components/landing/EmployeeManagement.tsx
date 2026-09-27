import { ArrowUpRight, CheckCircle2, Clock3, UsersRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { teamManagementItems } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

const representativeQueue = [
  { title: "Lead review", detail: "Buyer requirements need confirmation", state: "High attention" },
  { title: "Follow-up", detail: "Next conversation is due for review", state: "Follow-up due" },
  { title: "Property options", detail: "Relevant options are ready to discuss", state: "Ready" },
] as const

export function EmployeeManagement() {
  return (
    <section id="team-management" aria-labelledby="team-title" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            id="team-title"
            eyebrow="Employee & sales team management"
            title="Give every lead an owner—and every manager a clearer operating view."
            description="Coordinate lead ownership, team workload, activities, and follow-up work so managers can support the right conversations at the right time."
          />
          <p className="max-w-xl text-sm leading-6 text-muted-foreground lg:justify-self-end">
            Built for coordination and coaching—not employee surveillance. Available views and reporting should reflect your team’s configured workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamManagementItems.map((item) => {
            const Icon = item.icon

            return (
              <Card className="p-5" key={item.title}>
                <Icon aria-hidden="true" className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <p className="text-sm font-semibold text-foreground">Representative work queue</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative personal operating view</p>
              </div>
              <UsersRound aria-hidden="true" className="size-5 text-primary" />
            </div>
            <ul className="divide-y divide-border">
              {representativeQueue.map((item, index) => (
                <li className="flex items-center gap-3 p-5" key={item.title}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  <Badge variant={index === 1 ? "warning" : index === 2 ? "success" : "ai"}>
                    {item.state}
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <p className="text-sm font-semibold text-foreground">Manager operating view</p>
                <p className="mt-1 text-sm text-muted-foreground">Illustrative team and pipeline context</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-5 text-primary" />
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock3 aria-hidden="true" className="size-4 text-amber-700" />
                  Follow-up attention
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Review work that needs an owner or a clear next action.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-700" />
                  Pipeline movement
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  See movement across lead stages and booking progress.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
