import { CircleX } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { type objectMember } from '@/app/services/organizationService/create.ts';

interface MemberScrollAreaProps {
  members: objectMember[];
  onRemove: (email: string) => void;
}

export function MemberScrollArea({ members, onRemove }: MemberScrollAreaProps) {
  return (
    <ScrollArea className='max-h-40 min-h-20 max-sm:px-4 px-6 py-2 bg-white w-full mx-auto rounded-md shadow-sm border border-gray-300'>
      <ul className='text-sm text-gray-700 space-y-2'>
        {members.map((member, index) => (
          <li
            key={index}
            className='flex items-center justify-between gap-2 border-b border-gray-100 pb-1'
          >
            <span className='truncate max-w-[85%] text-ellipsis overflow-hidden'>
              {member.userEmail}
            </span>
            <button
              type='button'
              onClick={() => onRemove(member.userEmail)}
              className='text-red-500 hover:text-red-700 flex-shrink-0'
            >
              <CircleX size={18} />
            </button>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
