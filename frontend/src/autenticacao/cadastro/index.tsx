import { AuthContainer } from '../components/AuthContainer';
import { useCadastroController } from './useCadastroController';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const { handleSubmit, register, errors } = useCadastroController();
  return (
    <AuthContainer titulo='Crie sua Conta'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input
          placeholder='Nome'
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          type='email'
          placeholder='E-mail'
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          type='password'
          placeholder='Senha'
          {...register('password')}
          error={errors.password?.message}
        />
        <Button className='mt-2' type='submit'>
          Criar Minha Conta
        </Button>
      </form>

      <p className='text-center mt-4'>
        <span>Já possui conta?</span>{' '}
        <Link to='/login' className='text-[#04CFF3]'>
          Entrar
        </Link>
      </p>
    </AuthContainer>
  );
}
