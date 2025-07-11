import SessaoGastos from './components/SessaoGastos';

export default function TabelaGastos() {
  return (
    <div className='flex flex-col-reverse md:flex-row flex-grow gap-2'>
      <div className='flex flex-wrap md:w-[55%] rounded-xl bg-white min-h-[70vh] p-2 max-sm:pb-16'>
        <SessaoGastos />
      </div>

      <div className='bg-gray-300 text-gray-900 font-roboto flex-grow rounded-xl p-4'>
        <ul className='space-y-1 text-sm'>
          <li>ULTIMA ATUALIZAÇÃO: </li>
          <li>ULTIMO A ATUALIZAR: </li>
          <li>GASTOS TOTAIS: </li>
          <li>GASTOS SEPARADOS: </li>
          <li>GASTOS FIXOS: </li>
        </ul>
      </div>
    </div>
  );
}
