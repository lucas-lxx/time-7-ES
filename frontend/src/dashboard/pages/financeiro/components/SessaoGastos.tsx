import CardGastos from './CardGastos';
import { ListFilter } from 'lucide-react';
import { mockCardGasto } from '../../../../mocks/mockCardGasto';

export default function SessaoGastos() {
  return (
    <div className='w-full'>
      <div className='flex justify-end mb-4'>
        <button
          onClick={() => console.log('ABRIR FILTRO')}
          className='bg-sky-50 border-2 border-sky-300 rounded-full size-8 grid place-items-center'
        >
          <ListFilter className='text-sky-600' />
        </button>
      </div>
      <div className='space-y-2 md:h-[69vh] md:overflow-y-auto'>
        {mockCardGasto.map((gasto, index) => (
          <CardGastos key={index} {...gasto} />
        ))}
      </div>
    </div>
  );
}
