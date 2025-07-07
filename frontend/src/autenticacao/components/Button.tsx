import { type ComponentProps } from 'react';
import { cn } from '@/app/utils/cn';
import { Spinner } from './Spinner';
/*@typescript-eslint/no-empty-object-type*/
interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white transition-all active:bg-teal-950 flex items-center justify-center',
        className,
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className='w-6 h-6' />}
    </button>
  );
}
