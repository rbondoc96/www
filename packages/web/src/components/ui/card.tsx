import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utilities/cn';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, children }, ref) => (
    <div ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}>
        {children}
    </div>
));
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, children }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)}>
        {children}
    </div>
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, children }, ref) => (
    <div ref={ref} className={cn('font-semibold leading-none tracking-tight', className)}>
        {children}
    </div>
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children }, ref) => (
        <div ref={ref} className={cn('text-sm text-muted-foreground', className)}>
            {children}
        </div>
    ),
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children }, ref) => (
        <div ref={ref} className={cn('p-6 pt-0', className)}>
            {children}
        </div>
    ),
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, children }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)}>
        {children}
    </div>
));
CardFooter.displayName = 'CardFooter';
