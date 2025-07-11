import { Sheet, SheetTrigger } from '@/components/ui/sheet';

import { CirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SheetButtonProps {
  nomeEvento: string;
  sheetContent: React.ReactNode;
}

export default function SheetButton({
  nomeEvento,
  sheetContent,
}: SheetButtonProps) {
  return (
    <Sheet>
      <Button
        asChild
        className='flex items-center mr-7 max-sm:fixed max-sm:bottom-8 max-sm:inset-x-6 max-sm:m-auto z-10'
      >
        <SheetTrigger>
          <CirclePlus />
          {nomeEvento}
        </SheetTrigger>
      </Button>
      {sheetContent}
    </Sheet>
  );
}
