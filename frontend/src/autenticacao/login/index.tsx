import { useLoginController } from './useLoginController';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { AuthContainer } from '../components/AuthContainer';

export default function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <AuthContainer titulo='Acesse sua Conta'>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4 '>
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

        <Button
          idButton='loginSubmit'
          className='mt-2'
          type='submit'
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>

      <div className='flex flex-col items-center gap-2 mt-4'>
        <Link to='/recuperacao' className='text-cor-secundaria'>
          Esqueci minha senha
        </Link>
        <p>
          Não possui conta?{' '}
          <Link to='/' className='text-cor-secundaria'>
            Cadastre-se
          </Link>
        </p>
      </div>
    </AuthContainer>
  );
}
