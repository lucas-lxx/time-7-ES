import type { ReactNode } from 'react';

type LoginProps = {
  children?: ReactNode;
};
//items-center justify-between
export default function Login({ children }: LoginProps) {
  return (
    <div className='bg-cor-principal w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-30 py-8 gap-8'>
      {children}

      <img
        src='../../logoColetivoCortada.png'
        alt='Logo Coletivo'
        className='w-60 md:w-100 max-w-full object-contain'
      />
    </div>
  );
}
