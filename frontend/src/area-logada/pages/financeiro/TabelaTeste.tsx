import { gastosMock } from '@/mocks/mockGastos';

export function TabelaTeste() {
  return (
    <div className='dark relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
            <th scope='col' className='px-6 py-3'>
              Nome
            </th>
            <th scope='col' className='px-6 py-3'>
              Data da Compra
            </th>
            <th scope='col' className='px-6 py-3'>
              Pagamento
            </th>
            <th scope='col' className='px-6 py-3'>
              Valor
            </th>
          </tr>
        </thead>
        <tbody id='tabela-gastos'>
          {gastosMock.map((item) => (
            <tr className='style-tabela-gastos-tr' key={item.id}>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {item.nome}
              </th>
              <td className='px-6 py-4'>{item.dataCompra}</td>
              <td className='px-6 py-4'>{item.pagamento}</td>
              <td className='px-6 py-4'>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
