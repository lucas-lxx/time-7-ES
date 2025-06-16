export default function Cadastro() {
  return (
    <div className='flex flex-col items-center bg-white px-11 pt-8 rounded-md h-[25rem] max-w-105'>
      <h1 className='text-cor-principal text-4xl font-normal font-roboto'>
        Crie sua Conta
      </h1>

      <div className='flex flex-col items-start w-full mt-4 '>
        <label htmlFor='email'>E-mail</label>
        <input id='email' type='text' className='border-1 border-gray-200' />
      </div>

      <div className='flex flex-col items-start w-full mt-4 '>
        <label htmlFor='name'>Nome Completo</label>
        <input id='name' type='text' className='border-1 border-gray-200' />
      </div>

      <div className='flex flex-col items-start w-full mt-4 '>
        <label htmlFor='password'>Senha</label>
        <input id='password' type='text' className='border-1 border-gray-200' />
      </div>

      <button className='cursor-pointer bg-cor-principal text-white w-full rounded-sm py-1 mt-4 text-sm'>
        CRIAR MINHA CONTA
      </button>

      <div className='mt-9.5'>
        <p>
          Já possui conta? <a href='#'>Entrar</a>
        </p>
      </div>
    </div>
  );
}
