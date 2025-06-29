import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

interface IFormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState,
  } = useForm<IFormData>();

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('Formulário enviado com os dados:');
    console.log({ data });
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // para o backend ou realizar outras ações necessárias.
  });

  //form.register(); serve para registart o valor do input

  return (
    <div className='flex flex-col items-center bg-white px-11 pt-8 rounded-md h-[25rem] max-w-105'>
      <h1 className='text-cor-principal text-4xl font-normal font-roboto'>
        Acesse sua Conta
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-6 '>
        <div className='flex flex-col items-start w-full'>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            type='text'
            className='border-1 border-gray-200'
            {...register('email', {
              required: {
                value: true,
                message: 'O campo E-mail é obrigatório',
              },
            })}
          />
          {formState.errors.email && (
            <small className='text-red-400 block'>
              {formState.errors.email?.message}
            </small>
          )}
        </div>

        <div className='flex flex-col items-start w-full'>
          <label htmlFor='password'>Senha</label>
          <input
            id='password'
            type='text'
            className='border-1 border-gray-200'
            {...register('password', {
              required: {
                value: true,
                message: 'O campo Senha é obrigatório',
              },
            })}
          />
          <ErrorMessage
            errors={formState.errors}
            name='password'
            render={({ message }) => (
              <small className='text-red-400 block'>{message}</small>
            )}
          />
        </div>

        <button className='cursor-pointer bg-cor-principal text-white w-full rounded-sm py-1text-sm'>
          ACESSAR
        </button>
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
