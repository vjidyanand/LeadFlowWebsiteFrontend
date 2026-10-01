import { ChevronDown } from "lucide-react"

import { Container } from "@/components/ui/container"
import { faqItems } from "@/lib/constants"

import { SectionHeading } from "./SectionHeading"

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="faq-title"
          eyebrow="Frequently asked questions"
          title="Practical answers for real estate sales teams."
          description="Understand how the platform is designed to support the people, workflows, and lead sources involved in property sales."
          centered
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-xl border border-border bg-card">
          {faqItems.map((item) => (
            <details className="group px-5" key={item.question}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pb-5 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
