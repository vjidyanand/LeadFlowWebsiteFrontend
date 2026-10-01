import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "container mx-auto w-full px-6 lg:px-12",
        className,
      )}
      {...props}
    />
  )
}
