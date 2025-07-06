import { type ComponentProps, forwardRef } from 'react';
import { CircleX } from 'lucide-react';
import { cn } from '@/app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, className, error, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-nome',
            error && '!border-red-900',
            className,
          )}
          placeholder=' '
        />

        <label
          htmlFor={inputId}
          className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all duration-200'
        >
          {placeholder}
        </label>
        {error && (
          <div className='flex mt-0.5 items-center gap-1.5 text-red-900 text-xs'>
            <CircleX className='size-4' />
            <span className=' text-xs'>{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
