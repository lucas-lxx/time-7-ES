interface AuthContainerProps {
  children: React.ReactNode;
  titulo: string;
}

export function AuthContainer({ children, titulo }: AuthContainerProps) {
  return (
    <div className='flex flex-col items-center bg-white px-10 pt-8 rounded-md min-h-[26rem] h-auto max-w-105'>
      <h1 className='text-cor-principal text-3xl font-normal font-roboto mb-6'>
        {titulo}
      </h1>
      {children}
    </div>
  );
}
