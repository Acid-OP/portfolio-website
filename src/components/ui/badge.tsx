import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-zinc-800 bg-black text-zinc-100 hover:bg-zinc-900 dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-50",
        secondary:
          "border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:border-zinc-300 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
       outline: 
          "border-zinc-700 bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 dark:border-zinc-300 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 text-[8px] px-1 py-0.5",
        subtle:
          "border-transparent bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-700 dark:hover:bg-zinc-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }