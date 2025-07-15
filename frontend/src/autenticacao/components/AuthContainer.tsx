interface AuthContainerProps {
  children: React.ReactNode;
  titulo: string;
}

export function AuthContainer({ children, titulo }: AuthContainerProps) {
  return (
    <div className='flex flex-col items-center bg-white px-4 pt-8 w-full max-w-[350px] rounded-md min-w-[20rem] min-h-[26rem] h-auto'>
      <h1 className='text-cor-principal text-3xl font-normal font-roboto mb-6'>
        {titulo}
      </h1>
      {children}
    </div>
  );
}
