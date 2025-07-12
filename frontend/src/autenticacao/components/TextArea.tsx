import { type ComponentProps, forwardRef } from 'react';
import { CircleX } from 'lucide-react';
import { cn } from '@/app/utils/cn';

interface TextAreaProps extends ComponentProps<'textarea'> {
  name: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, name, id, className, error, ...props }, ref) => {
    const textAreaId = id ?? name;

    return (
      <div className='relative'>
        <textarea
          {...props}
          ref={ref}
          name={name}
          id={textAreaId}
          className={cn(
            'bg-white w-full rounded-lg border border-gray-500 px-3 max-sm:min-h-[120px] min-h-[100px] max-h-[175px] text-gray-800 pt-4 peer placeholder-shown:pt-3 focus:border-gray-800 transition-all outline-nome',
            error && '!border-red-900',
            className,
          )}
          placeholder=' '
          maxLength={1024}
        />

        <label
          htmlFor={textAreaId}
          className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all duration-200 bg-white'
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

TextArea.displayName = 'TextArea';
