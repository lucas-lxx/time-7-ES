//import { useAuth } from '@/app/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { authService } from '@/app/services/authService';
import { type SignupParams } from '@/app/services/authService/signup';

import { toast } from 'sonner';
import { sleep } from '@/app/utils/sleep';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
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

export function useCadastroController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  //isPending → substitui isLoading
  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });
  const navigate = useNavigate();
  //const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
      toast.success('Usuário cadastrado com sucesso');
      sleep(1500);
      navigate('login');
      //signin(accessToken);
    } catch {
      toast.error('Erro ao Criar usuário', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
