import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium", {
  variants: {
    variant: {
      default: "bg-slate-100 text-slate-700",
      success: "bg-emerald-100 text-emerald-700",
      warning: "bg-amber-100 text-amber-700",
      danger: "bg-rose-100 text-rose-700",
      brand: "bg-[#006A4E]/10 text-[#006A4E]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
