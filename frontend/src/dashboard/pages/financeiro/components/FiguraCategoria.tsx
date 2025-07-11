import { CreditCard, Banknote } from 'lucide-react';

type categoriaType = 'pix' | 'credito' | 'debito';

interface FiguraCategoriaProps {
  categoria: categoriaType;
}

export default function FiguraCategoria({ categoria }: FiguraCategoriaProps) {
  const Icon = categoria === 'pix' ? Banknote : CreditCard;

  const bgColors: Record<categoriaType, string> = {
    pix: 'bg-green-400',
    credito: 'bg-blue-400',
    debito: 'bg-orange-400',
  };

  return (
    <div
      className={`flex items-center justify-center -rotate-20 size-8 md:size-10 rounded-full ${bgColors[categoria]}`}
    >
      <Icon className='max-sm:size-6' />
    </div>
  );
}
