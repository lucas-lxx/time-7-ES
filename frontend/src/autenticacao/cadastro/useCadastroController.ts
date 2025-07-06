import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService } from '@/services/authService';

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

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const { accessToken } = await authService.signup(data);
    console.log({ accessToken });
  });

  return { handleSubmit, register, errors };
}
