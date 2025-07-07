import { mockCardGasto as mockData } from '@/mocks/mockCardGasto';
import CardGasto from '../../components/CardGasto';
import { TabelaTeste } from './TabelaTeste';

export default function TabelaGastos() {
  return (
    <div className='flex  flex-grow '>
      <div className='flex flex-wrap w-[60%] gap-2'>
        <TabelaTeste />
      </div>
      <div className='bg-gray-600 flex-grow'>
        <ul>
          <li>ULTIMA ATUALIZAÇÃO</li>
          <li>ULTIMO A ATUALIZAR</li>
          <li>GASTOS TOTAIS</li>
          <li>GASTOS SEPARADOS</li>
          <li>GASTOS FIXOS</li>
        </ul>
      </div>
    </div>
  );
}
