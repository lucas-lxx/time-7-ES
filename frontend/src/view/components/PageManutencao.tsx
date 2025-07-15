export function PageManutencao() {
  return (
    <div className='w-full h-full space-y-10 p-2 bg-[#F6F6F6] rounded-sm pt-4 sm:pt-6 md:pt-8 lg:pt-12'>
      <div className='w-full h-full flex flex-col items-center justify-center text-center -mt-10'>
        <img
          className='w-64 h-auto mb-6'
          src='/maintenance.svg'
          alt='Página em manutenção'
        />
        <h1 className='text-2xl font-semibold text-gray-700'>
          Estamos em manutenção 🚧
        </h1>
        <p className='mt-2 text-gray-500 text-sm max-w-sm'>
          Essa parte do Coletivo está sendo ajustada. Em breve, tudo volta ao
          normal!
        </p>
      </div>
    </div>
  );
}
