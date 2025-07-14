import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';

import { Trash, Pencil } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import EditFormularioOrganizacao from './EditFormularioOrganizacao';
import ModalApagarCard from './ModalApagarCard';

interface EdicaoCardProps {
  idOrganizacao: string;
  // title: string;
}

export default function EdicaoCard({ idOrganizacao }: EdicaoCardProps) {
  console.log(idOrganizacao);
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>
            <Trash />
          </button>
        </AlertDialogTrigger>
        {<ModalApagarCard idOrganizacao={idOrganizacao} />}
      </AlertDialog>

      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Pencil />
          </button>
        </SheetTrigger>
        {<EditFormularioOrganizacao />}
      </Sheet>
    </div>
  );
}
