import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { useEditOrganizacaoController } from '@/dashboard/pages/minhasOrganizacoes/controller/useEditOrganizacaoController';

interface ModalApagarCardPros {
  idOrganizacao: string;
}

export default function ModalApagarCard({
  idOrganizacao,
}: ModalApagarCardPros) {
  const { /*isLoadingDelete,*/ handleDeleteOrganization } =
    useEditOrganizacaoController();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Excluir Organização</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação é irreversível e todos os dados associados serão
          permanentemente removidos.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction className='bg-red-600 hover:bg-red-700' asChild>
          <button onClick={() => handleDeleteOrganization(idOrganizacao)}>
            Excluir
          </button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
