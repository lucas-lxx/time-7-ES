import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { type categoriaType } from './FiguraCategoria';

import { EllipsisVertical } from 'lucide-react';
import FiguraCategoria from './FiguraCategoria';
import Dropdown from './Dropdown';

export interface CardGastosProp {
  titulo: string;
  data: string;
  categoria: categoriaType;
  preco: string;
  criadoPor: string;
}

export default function CardGastos({
  titulo,
  data,
  preco,
  categoria,
  criadoPor,
}: CardGastosProp) {
  return (
    <div className='w-full max-w-150 h-16 bg-gray-50 shadow-lg rounded-xl flex pl-2 gap-3'>
      <div className='flex items-center '>
        <DropdownMenu>
          <DropdownMenuTrigger className=' '>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <Dropdown criadoPor={criadoPor} />
        </DropdownMenu>
      </div>
      <div className='flex items-center'>
        <FiguraCategoria categoria={categoria} />
      </div>
      <div className='pl-1 pt-2'>
        <h1 className='font-bold  truncate w-40'>{titulo}</h1>
        <p className='opacity-70'>{data}</p>
      </div>
      <div className='ml-auto flex items-center pr-6'>
        <span className='text-lg md:text-2xl font-bold text-green-600'>
          {preco}
        </span>
      </div>
    </div>
  );
}
