import { useForm } from 'react-hook-form';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export default function Cadastro() {
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
        Crie sua Conta
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
          <label htmlFor='name'>Nome Completo</label>
          <input
            id='name'
            type='text'
            className='border-1 border-gray-200'
            {...register('name', {
              required: {
                value: true,
                message: 'O campo Nome é obrigatório',
              },
            })}
          />
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
        </div>

        <button className='cursor-pointer bg-cor-principal text-white w-full rounded-sm py-1text-sm'>
          CRIAR MINHA CONTA
        </button>
      </form>

      <div className='mt-9.5'>
        <p>
          Já possui conta?{' '}
          <a className='text-[#04CFF3]' href='#'>
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
