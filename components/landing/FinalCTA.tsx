import { ArrowRight, CheckCircle2, ClipboardCheck, Headset, Workflow } from "lucide-react"

import { Container } from "@/components/ui/container"
import { DemoRequestForm } from "./DemoRequestForm"

const demoTopics = [
  { icon: ClipboardCheck, title: "Your lead journey", description: "Sources, routing, follow-up and booking stages." },
  { icon: Workflow, title: "Your operation", description: "Projects, sales teams and employee workflows." },
  { icon: Headset, title: "Your next steps", description: "A rollout conversation shaped around your needs." },
]

export function FinalCTA() {
  return (
    <section id="book-demo" aria-labelledby="final-cta-title" className="scroll-mt-20 bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-blue-100">A walkthrough built around your business</p>
            <h2 id="final-cta-title" className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              See how LeadFlow can support your real estate operation.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Tell us how your organization works today. We’ll focus the demo on the lead, project, people, and booking workflows that matter to your team.
            </p>
            <ul className="mt-8 grid gap-5">
              {demoTopics.map(({ icon: Icon, title, description }) => (
                <li className="flex gap-3" key={title}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/10 text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <strong className="block text-sm text-white">{title}</strong>
                    <span className="mt-1 block text-sm leading-5 text-blue-100">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-start gap-2 border-t border-white/20 pt-5 text-sm leading-6 text-blue-100">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              Your information is used only to respond to your demo request.
            </p>
          </div>

          <DemoRequestForm />
        </div>
      </Container>
    </section>
  )
}
