import DisplayOrganizacoes from './displayOrganizacoes';

import FormularioOrganizacao from './creatOrganizacoes/components/FormularioOrganizacao';
import SheetButton from '../../components/SheetButton';

export default function MinhasOrganizacoes() {
  return (
    <div className='w-full h-full space-y-10 p-2 bg-[#F6F6F6] rounded-xl pt-4 sm:pt-6 md:pt-8 lg:pt-12'>
      <div className='flex max-sm:flex-col  sm:justify-between sm:items-center'>
        <h1 className='font-roboto font-semibold pl-7 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          Minhas Organizações
        </h1>
        <SheetButton
          nomeEvento='Criar Organização'
          sheetContent={<FormularioOrganizacao />}
        />
      </div>
      <DisplayOrganizacoes />
    </div>
  );
}
