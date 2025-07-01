import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SelectFormaDePagamento() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Pagamento' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pagamento</SelectLabel>
          <SelectItem value='pix'>Pix</SelectItem>
          <SelectItem value='credito'>Cartão de Crédito</SelectItem>
          <SelectItem value='debito'>Cartão de Débito</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
