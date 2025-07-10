//type formaDePagamento = 'pix' | 'credito' | 'debito';

interface CardProps {
  title: string;
  description?: string;
  date: string;
  pagamento?: string;
  valor: number;
}

export default function CardGasto({
  title,
  description,
  date,
  pagamento,
  valor,
}: CardProps) {
  return (
    <div
      className='flex flex-col   border-2 border-gray-400 p-4 w-full max-w-md
    shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm pt-2 cursor-pointer  '
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <span className='text-xl font-semibold text-green-600'>{`R$ ${valor.toFixed(2)}`}</span>
      </div>
      {description && <p className='text-gray-600 mt-2'>{description}</p>}
      <div className='flex justify-between items-center mt-4 text-sm text-gray-500'>
        <span>{date}</span>
        {pagamento && <span>{pagamento}</span>}
      </div>
    </div>
  );
}
