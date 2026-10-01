import { MessageSquareQuote } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="testimonials-title"
          eyebrow="Customer stories"
          title="Real customer proof belongs here—when it is ready to be shared."
          description="Approved customer stories and verified outcomes can help teams understand adoption, response discipline, and sales-process visibility in context."
          centered
        />
        <Card className="mx-auto mt-10 max-w-3xl p-8 text-center sm:p-10">
          <span className="mx-auto grid size-12 place-items-center rounded-xl bg-blue-50 text-primary">
            <MessageSquareQuote aria-hidden="true" className="size-6" />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-foreground">Customer stories and verified outcomes will be shared here when available.</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            This page does not use fabricated names, companies, quotes, ratings, or performance figures.
          </p>
        </Card>
      </Container>
    </section>
  )
}
