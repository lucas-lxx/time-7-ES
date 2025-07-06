import { type ComponentProps } from 'react';
import { cn } from '@/app/utils/cn';

/**
 * @typescript-eslint/no-empty-object-type
 */
type ButtonProps = ComponentProps<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white transition-all active:bg-teal-950',
        className,
      )}
    />
  );
}
