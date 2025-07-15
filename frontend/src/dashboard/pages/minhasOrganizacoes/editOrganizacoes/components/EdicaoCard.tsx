import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useDashboard } from '@/dashboard/DashboardContext/useDashboard';

import { Trash, Pencil } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import EditFormularioOrganizacao from './EditFormularioOrganizacao';
import ModalApagarCard from './ModalApagarCard';

export default function EdicaoCard() {
  const { selectedOrganization } = useDashboard();

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>
            <Trash />
          </button>
        </AlertDialogTrigger>
        {<ModalApagarCard idOrganizacao={selectedOrganization!.id} />}
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
