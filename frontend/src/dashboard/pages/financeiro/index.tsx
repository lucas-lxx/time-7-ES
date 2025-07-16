import SheetInserirCompras from '../../components/SheetInserirCompras';
import SheetButton from '../../components/SheetButton';
import DashboardGastos from './DashboardGastos';

export default function Financeiro() {
  return (
    <div className='w-full h-full space-y-2 md:space-y-6 p-2 bg-[#F6F6F6] rounded-sm pt-4 sm:pt-6 md:pt-8 lg:pt-12'>
      <div className='flex max-sm:flex-col  sm:justify-between sm:items-center'>
        <h1 className='font-roboto font-semibold pl-7 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          NOME DA ORGANIZAÇÃO
        </h1>
        <SheetButton
          nomeEvento='Adicionar Compra'
          sheetContent={<SheetInserirCompras />}
        />
      </div>

      <DashboardGastos />
    </div>
  );
}
