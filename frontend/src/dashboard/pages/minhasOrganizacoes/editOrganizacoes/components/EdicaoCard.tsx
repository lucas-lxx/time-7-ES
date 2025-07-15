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
      <div>
        <button>
          <Trash />
        </button>

        <button>
          <Pencil />
        </button>
      </div>
    );
  }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>
            <Trash />
          </button>
        </AlertDialogTrigger>
        {<ModalApagarCard idOrganizacao={id} />}
      </AlertDialog>

      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Pencil />
          </button>
        </SheetTrigger>
        {<EditFormularioOrganizacao organizacao={selectedOrganization!} />}
      </Sheet>
    </div>
  );
}
