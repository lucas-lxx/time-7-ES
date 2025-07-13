import { AuthContainer } from '../components/AuthContainer';
import { useRecuperacaoController } from './useRecuperacaoController';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Recuperacao() {
  const { handleSubmit, register, errors } = useRecuperacaoController();
  return (
    <AuthContainer titulo='Recuperação de Senha'>
      <p className='text-xl text-gray-400 text-center my-12'>
        Digite o e-mail cadastrado para recuperar o acesso à sua conta.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input
          type='email'
          placeholder='E-mail'
          {...register('email')}
          error={errors.email?.message}
        />
        <Button idButton='recuperarSenha' className='mt-2' type='submit'>
          Solicitar Recuperação
        </Button>
      </form>

      <Link to='/login' className='mt-4 text-center text-[#04CFF3]'>
        Voltar ao Login
      </Link>
    </AuthContainer>
  );
}
