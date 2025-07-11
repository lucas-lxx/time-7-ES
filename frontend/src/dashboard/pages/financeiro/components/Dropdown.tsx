import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DropdownProps {
  criadoPor: string;
}

export default function Dropdown({ criadoPor }: DropdownProps) {
  return (
    <DropdownMenuContent>
      <DropdownMenuLabel>
        Criado por <span className='font-bold'>{criadoPor}</span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className='text-blue-700'>Editar</DropdownMenuItem>
      <DropdownMenuItem className='text-red-700'>Apagar</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
