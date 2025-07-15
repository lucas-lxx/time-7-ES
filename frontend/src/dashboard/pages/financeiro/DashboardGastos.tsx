import SessaoGastos from './components/SessaoGastos';

export default function TabelaGastos() {
  return (
    <div className='flex flex-col-reverse md:flex-row flex-grow gap-2'>
      <div className='flex flex-wrap md:w-[55%] rounded-xl bg-white min-h-[70vh] p-2 max-sm:pb-16'>
        <SessaoGastos />
      </div>

      <div className='bg-white text-gray-800 font-roboto flex-grow rounded-xl p-6 shadow-md space-y-4'>
        <h2 className='text-lg font-semibold border-b pb-2'>
          Resumo dos Gastos
        </h2>

        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-600'>Última Atualização:</span>
          <span className='text-sm font-medium'>08/07/2024</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-600'>Último a Atualizar:</span>
          <span className='text-sm font-medium'>Maria</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-600'>Gastos Totais:</span>
          <span className='text-sm font-bold text-red-600'>R$ 1.610,75</span>
        </div>

        <div>
          <span className='text-sm text-gray-600 block mb-1'>
            Gastos Separados:
          </span>
          <ul className='text-sm pl-4 list-disc space-y-1'>
            <li>
              João: <span className='font-medium text-gray-700'>R$ 995,35</span>
            </li>
            <li>
              Maria: <span className='font-medium text-gray-700'>R$ 19,90</span>
            </li>
            <li>
              Ana: <span className='font-medium text-gray-700'>R$ 519,55</span>
            </li>
            <li>
              Lucas: <span className='font-medium text-gray-700'>R$ 43,45</span>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-sm text-gray-600 block mb-1'>
            Gastos Fixos:
          </span>
          <div className='text-sm font-medium text-gray-700'>
            R$ 59,80{' '}
            <span className='text-xs text-gray-500'>(Netflix, Spotify)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
