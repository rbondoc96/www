import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utilities/cn.ts";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-y rounded-md border border-border bg-transparent px-3 py-2 text-sm",
        "transition-colors placeholder:text-muted-foreground",
        "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
