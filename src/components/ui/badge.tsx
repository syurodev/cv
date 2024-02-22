import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 print:bg-primary/80 print:text-primary-foreground print:border-transparent text-primary-foreground hover:bg-primary/60",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 print:bg-secondary print:text-secondary-foreground print:border-transparent",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 print:bg-destructive print:text-destructive-foreground print:border-transparent",
        outline: "text-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
