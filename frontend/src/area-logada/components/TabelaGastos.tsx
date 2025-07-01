import { mockCardGasto as mockData } from '@/mocks/mockCardGasto';
import CardGasto from '../components/CardGasto';

export default function TabelaGastos() {
  return (
    <div className='flex flex-grow '>
      <div className='flex flex-wrap w-[60%] gap-2 px-4 '>
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
      <div className='bg-gray-600 flex-grow'>
        oioio
        <ul>
          <li>colocar gastos totais</li>
          <li>quem está participando?</li>
          <li>Total de gastos: R$ 0,00</li>
          <li>Participantes: Nenhum</li>
          <li>Última atualização: Nunca</li>
        </ul>
      </div>
    </div>
  );
}
