import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utilities/cn.ts";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm",
        "transition-colors placeholder:text-muted-foreground",
        "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
