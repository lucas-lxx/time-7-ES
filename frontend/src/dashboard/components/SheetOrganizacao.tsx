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

import { ScrollArea } from '@/components/ui/scroll-area';

import { Textarea } from '@/components/ui/textarea';

export default function SheetOrganizacao() {
  return (
    <SheetContent className='md:min-w-[40%] lg:min-w-[30%] max-sm:w-auto'>
      <SheetHeader>
        <SheetTitle>Faça sua nova Organização</SheetTitle>
        <SheetDescription>
          Crie uma nova organização para gerenciar suas finanças pessoais ou
          coletivas.
        </SheetDescription>
      </SheetHeader>
      <div className='grid flex-1 auto-rows-min gap-6 px-4'>
        <div className='grid gap-3'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' defaultValue='Pedro Duarte' />
        </div>
        <div className='grid gap-3'>
          <Label htmlFor='descricao'>Descrição</Label>
          <Textarea id='descricao' placeholder='Type your message here.' />
        </div>
        <div className='flex items-center gap-3'>
          <Input type='email' placeholder='Email' className='flex-1' />
          <Button type='submit' variant='outline'>
            Adicionar membro
          </Button>
          usar um Scroll-area
        </div>
        <div className='flex items-center rounded-md border'>
          <ScrollArea className='h-40'>
            john.doe@example.com; jane.doe@example.com; user1@example.com;
            user2@example.com; test.email@example.com; fake.email@example.com;
            random.user@example.com; sample.email@example.com;
            demo.user@example.com; example.email@example.com
          </ScrollArea>
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
