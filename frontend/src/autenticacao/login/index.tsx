import { useLoginController } from './useLoginController';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Login() {
  const { handleSubmit, register, errors } = useLoginController();

  return (
    <div className='flex flex-col items-center bg-white px-11 pt-8 rounded-md h-[25rem] max-w-105'>
      <h1 className='text-cor-principal text-4xl font-normal font-roboto'>
        Acesse sua Conta
      </h1>

      <form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4 '>
        <Input type='email' placeholder='E-mail' {...register('email')} />
        {errors.email && (
          <span className='text-sm text-red-500'>{errors.email.message}</span>
        )}
        <Input type='password' placeholder='Senha' {...register('password')} />
        {errors.email && (
          <span className='text-sm text-red-500'>{errors.email.message}</span>
        )}

        <Button className='mt-2' type='submit'>
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
    </div>
  );
}
