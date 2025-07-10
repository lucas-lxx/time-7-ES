import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import Calendario from './Calendario';
import SelectFormaDePagamento from './SelectFormaDePagamento';

import { Textarea } from '@/components/ui/textarea';

export default function SheetInserirCompras() {
  return (
    <SheetContent className='md:min-w-[40%] lg:min-w-[30%] max-sm:w-auto'>
      <SheetHeader>
        <SheetTitle>Adicione uma nova Compra</SheetTitle>
        <SheetDescription>
          Adicione uma nova compra à sua tabela de gastos para acompanhar e
          gerenciar suas despesas de forma eficiente. Aqui você pode registrar
          os detalhes de cada compra, como valor, data e descrição, ajudando a
          manter o controle financeiro pessoal ou coletivo.
        </SheetDescription>
      </SheetHeader>
      <div className='grid flex-1 auto-rows-min gap-6 px-4'>
        <div className='grid gap-3'>
          <Label htmlFor='name'>Nome</Label>
          <Input id='name' placeholder='Nomeie sua despesa' />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          {/** */}
          <div className='grid gap-3'>
            <Label htmlFor='valor'>Valor</Label>
            <Input id='valor' placeholder='R$' />
          </div>

          <Calendario />

          {/** */}
        </div>
        <div>
          <SelectFormaDePagamento />
        </div>
        <div className='grid gap-3 '>
          <Label htmlFor='descricao'>Descrição</Label>
          <Textarea
            className='max-h-40'
            id='descricao'
            placeholder='Descreva o gasto'
          />
        </div>
      </div>

      <SheetFooter>
        <Button type='submit'>Criar</Button>
        <SheetClose asChild>
          <Button variant='outline'>Fechar</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
