import { CreditCard, Banknote, WalletMinimal } from 'lucide-react';

export type categoriaType = 'PIX' | 'CREDITO' | 'DEBITO';

interface FiguraCategoriaProps {
  categoria: categoriaType;
}

export default function FiguraCategoria({ categoria }: FiguraCategoriaProps) {
  const iconMap: Record<categoriaType, React.ElementType> = {
    PIX: Banknote,
    CREDITO: CreditCard,
    DEBITO: WalletMinimal,
  };

  const Icon = iconMap[categoria];

  const bgColors: Record<categoriaType, string> = {
    PIX: 'bg-green-400',
    CREDITO: 'bg-blue-400',
    DEBITO: 'bg-orange-400',
  };

  return (
    <div
      className={`flex items-center justify-center -rotate-20 size-8 md:size-10 rounded-full ${bgColors[categoria]}`}
    >
      <Icon className='max-sm:size-6' />
    </div>
  );
}
