import type { ReactNode } from 'react';

type LoginProps = {
  children?: ReactNode;
};
//items-center justify-between
export default function Login({ children }: LoginProps) {
  return (
    <div className='bg-cor-principal w-full h-screen flex items-center justify-between px-19.5'>
      {children}

      <img src='../../logoColetivo.png' alt='Logo Coletivo' />
    </div>
  );
}
