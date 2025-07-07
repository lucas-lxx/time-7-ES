import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { authService } from '@/services/authService';
import { type SigninParams } from '@/services/authService/signin';

const schema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um email válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatório')
    .min(8, 'Mínimo 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  //isPending → substitui isLoading
  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
      toast.success('Usuário cadastrado com sucesso');
    } catch {
      toast.error('Credenciais inválidas!', {
        action: {
          label: 'Fechar',
          onClick: () => console.log('Undo'),
        },
      });
    }
  });
  return { handleSubmit, register, errors, isLoading };
}
