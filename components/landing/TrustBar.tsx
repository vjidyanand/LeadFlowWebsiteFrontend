import { Container } from "@/components/ui/container"
import { trustSources } from "@/lib/constants"

export function TrustBar() {
  return (
    <section aria-labelledby="lead-sources-title" className="border-b border-border bg-card py-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-center">
          <div>
            <p id="lead-sources-title" className="text-medium font-semibold text-foreground">
              Bring lead sources into one connected workflow.
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Discuss the sources and systems your team needs to connect.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
            {trustSources.map((source) => {
              const Icon = source.icon

              return (
                <li className="flex items-center gap-2" key={source.title}>
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  <span className="text-medium font-semibold text-foreground">{source.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
