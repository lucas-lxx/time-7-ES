export function PageEmptyGroup() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-center -mt-10'>
      <img
        className='w-64 h-auto mb-6'
        src='/emptyFound.svg'
        alt='Nenhum grupo encontrado'
      />
      <h1 className='text-2xl font-semibold text-gray-700'>
        Sem grupo, sem controle.
      </h1>
      <p className='mt-2 text-gray-500 text-sm max-w-sm'>
        Crie seu primeiro coletivo e organize os gastos com a galera.
      </p>
    </div>
  );
}
