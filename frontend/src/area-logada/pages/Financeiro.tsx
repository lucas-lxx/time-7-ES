import { mockCardGasto as mockData } from '@/mocks/mockCardGasto';
import CardGasto from '../components/CardGasto';

import SheetInserirCompras from '../components/SheetInserirCompras';
import SheetButton from '../components/SheetButton';

export default function Financeiro() {
  return (
    <div className='w-full h-full space-y-10 p-2 bg-[#F6F6F6] rounded-xl pt-4 sm:pt-6 md:pt-8 lg:pt-12'>
      <div className='flex max-sm:flex-col  sm:justify-between sm:items-center'>
        <h1 className='font-roboto font-semibold pl-7 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          NOME DA ORGANIZAÇÃO
        </h1>
        <SheetButton
          nomeEvento='Adicionar Compra'
          sheetContent={<SheetInserirCompras />}
        />
      </div>
      <div className='flex flex-wrap gap-2 px-4 '>
        {mockData.map((gasto, index) => (
          <CardGasto
            key={index}
            title={gasto.title}
            description={gasto.description}
            date={gasto.date}
            pagamento={gasto.pagamento}
            valor={gasto.valor}
          />
        ))}
      </div>
    </div>
  );
}
