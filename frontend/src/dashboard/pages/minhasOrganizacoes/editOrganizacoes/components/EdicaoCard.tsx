import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useDashboard } from '@/dashboard/DashboardContext/useDashboard';

import { Trash, Pencil } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import EditFormularioOrganizacao from './EditFormularioOrganizacao';
import ModalApagarCard from './ModalApagarCard';

interface EdicaoCardProp {
  id: string;
}

export default function EdicaoCard({ id }: EdicaoCardProp) {
  const { selectedOrganization } = useDashboard();

  if (!selectedOrganization) {
    return (
      <div className='absolute top-2 right-2 flex gap-2 z-10 group-hover:opacity-100 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200'>
        <button className='p-1 rounded hover:bg-red-100'>
          <Trash size={16} className='text-red-600' />
        </button>

        <button className='p-1 rounded hover:bg-blue-100'>
          <Pencil size={16} className='text-blue-600' />
        </button>
      </div>
    );
  }
  return (
    <div className='absolute top-2 right-2 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className='p-1 rounded hover:bg-red-100'>
            <Trash size={16} className='text-red-600' />
          </button>
        </AlertDialogTrigger>
        <ModalApagarCard idOrganizacao={id} />
      </AlertDialog>

      <Sheet>
        <SheetTrigger asChild>
          <button className='p-1 rounded hover:bg-blue-100'>
            <Pencil size={16} className='text-blue-600' />
          </button>
        </SheetTrigger>
        <EditFormularioOrganizacao organizacao={selectedOrganization} />
      </Sheet>
    </div>
  );
}
