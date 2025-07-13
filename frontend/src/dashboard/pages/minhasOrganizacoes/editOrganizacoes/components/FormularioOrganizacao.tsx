import { Button } from '@/autenticacao/components/Button';
import { Input } from '@/autenticacao/components/Input';
import { TextArea } from '@/autenticacao/components/TextArea';

import { MemberScrollArea } from './MemberScrollArea';

import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { useOrganizacaoController } from '../useOrganizacaoController';

export default function FormularioOrganizacao() {
  const {
    handleSubmit,
    register,
    errors,
    isLoading,

    members,
    email,
    setEmail,
    handleAddMember,
    handleRemoveMember,
  } = useOrganizacaoController();

  return (
    <SheetContent className='md:min-w-[40%] lg:min-w-[30%] max-sm:w-auto'>
      <SheetHeader>
        <SheetTitle>Faça sua nova Organização</SheetTitle>
        <SheetDescription>
          Crie uma nova organização para gerenciar suas finanças pessoais ou
          coletivas.
        </SheetDescription>
      </SheetHeader>

      <form className='flex flex-col h-full gap-4 px-4' onSubmit={handleSubmit}>
        <Input
          type='name'
          placeholder='Nome da Organização'
          {...register('name')}
          error={errors.name?.message}
        />

        <TextArea
          placeholder='Descreva sua organização'
          {...register('description')}
        />

        <div className='flex max-sm:flex-col gap-2 justify-between'>
          <Input
            type='email'
            placeholder='Email dos membros'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            idButton='adicionarOrganizacao'
            type='button'
            onClick={handleAddMember}
            className='bg-sky-600 m-auto max-sm:m-0 max-sm:self-end text-sm px-4 h-9'
            isLoading={false}
          >
            Adicionar
          </Button>
        </div>

        <MemberScrollArea members={members} onRemove={handleRemoveMember} />

        <SheetFooter className='mt-auto'>
          <Button
            idButton='editarOrganizacao'
            className='mt-2 bg-sky-600 active:bg-sky-900'
            type='submit'
            isLoading={isLoading}
          >
            Criar Minha Conta
          </Button>
          <SheetClose asChild>
            <button>Fechar</button>
          </SheetClose>
        </SheetFooter>
      </form>
    </SheetContent>
  );
}
