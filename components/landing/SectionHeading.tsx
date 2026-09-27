import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-primary">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-balance text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl sm:leading-[1.2]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  )
}
