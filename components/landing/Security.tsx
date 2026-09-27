import { FileCheck2, KeyRound, ShieldCheck } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"

const securityTopics = [
  { title: "Data needs", description: "Review the customer and lead data your workflow needs to handle.", icon: FileCheck2 },
  { title: "Access needs", description: "Discuss how your team should work with data, responsibilities, and access.", icon: KeyRound },
  { title: "Deployment needs", description: "Review implementation and operating requirements before rollout.", icon: ShieldCheck },
] as const

export function Security() {
  return (
    <section id="security" aria-labelledby="security-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300">Security & reliability</p>
              <h2 id="security-title" className="mt-3 text-balance text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                Plan implementation around your data and access needs.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Security, access, data handling, and deployment requirements should be reviewed against your organization’s needs before rollout.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {securityTopics.map((topic) => {
                const Icon = topic.icon

                return (
                  <Card className="border-slate-700 bg-slate-900 p-5 text-slate-100" key={topic.title}>
                    <Icon aria-hidden="true" className="size-6 text-blue-300" />
                    <h3 className="mt-5 font-semibold">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{topic.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
