import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLAttributes } from 'react';
import { cn } from '@/utilities/cn';

const badgeVariants = cva(
    [
        'inline-flex items-center',
        'rounded-md border',
        'px-2.5 py-0.5',
        'text-xs font-semibold',
        'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    ],
    {
        variants: {
            variant: {
                accent: 'bg-accent/15 text-accent',
                default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
                secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                    'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
                outline: 'text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    //
}

export function Badge({ children, className, variant, ...props }: Props) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {children}
        </div>
    );
}
