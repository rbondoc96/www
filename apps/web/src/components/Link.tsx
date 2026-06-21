"use client";

import { Link as RouterLink } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utilities/cn.ts";

const styles = cva([], {
  variants: {
    variant: {
      accent: ["text-accent hover:text-accent"],
    },
  },
});

type PickedProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "rel" | "target">;

export interface LinkProps extends PickedProps, VariantProps<typeof styles> {
  // Accepts any string, but gives intellisense for 'noreferrer'
  rel?: "noreferrer" | (string & {});
  target?: "_blank" | "_self" | "_parent" | "_top";
  to?: string;
  underline?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, href, rel, target, to, underline = false, variant, ...props }, ref) => {
    const composedClassName = cn(
      styles({ variant }),
      underline && "hover:underline hover:underline-offset-4",
      className,
    );

    return to !== undefined ? (
      <RouterLink className={composedClassName} ref={ref} to={to} {...props}>
        {children}
      </RouterLink>
    ) : (
      <a className={composedClassName} href={href} ref={ref} rel={rel} target={target} {...props}>
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
