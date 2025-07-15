import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { organizationService } from '@/app/services/organizationService';
import { type organizationParams } from '@/app/services/organizationService/create';
import { type objectMember } from '@/app/services/organizationService/create';
import { type groupUserType } from '@/app/services/organizationService/getAll';

const schema = z.object({
  name: z
    .string()
    .nonempty('Nome da Organização é obrigatório')
    .min(4, 'Mínimo 4 caracteres'),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

export function useOrganizacaoController() {
  const [members, setMembers] = useState<objectMember[]>([]);
  const [email, setEmail] = useState('');

  const handleAddMember = () => {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('E-mail inválido');
      return;
    }

    const member: objectMember = {
      userEmail: email,
      permission: 'EDIT', // ou VIEW se quiser alternar
    };

    setMembers((prev) => [...prev, member]);
    setEmail('');
  };

  const handleRemoveMember = (emailToRemove: string) => {
    setMembers((prev) => prev.filter((m) => m.userEmail !== emailToRemove));
  };

  // AQUI
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },

    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (data: organizationParams) => organizationService.create(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        members,
      });
      queryClient.invalidateQueries({ queryKey: ['organizationsIMemberOf'] });

      toast.success('Grupo criado');
      reset();
      setMembers([]);
    } catch {
      toast.error('Não foi possível criar Grupo');
    }
  });

  const preencherEmailFormulario = (groupUser: groupUserType[]) => {
    const convertedMembers: objectMember[] = groupUser.map((item) => ({
      userEmail: item.User.email,
      permission: item.permission,
    }));

    setMembers(convertedMembers);
  };

  return {
    handleSubmit,
    register,
    errors,
    isLoading,
    reset,

    preencherEmailFormulario,
    members,
    email,
    setEmail,
    handleAddMember,
    handleRemoveMember,
  };
}
