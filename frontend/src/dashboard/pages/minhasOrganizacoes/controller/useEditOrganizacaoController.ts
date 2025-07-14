import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { organizationService } from '@/app/services/organizationService';
import { type organizationParams } from '@/app/services/organizationService/create';

const schema = z.object({
  name: z
    .string()
    .nonempty('Nome da Organização é obrigatório')
    .min(4, 'Mínimo 4 caracteres'),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

export type objectMember = {
  userEmail: string;
  permission: 'EDIT' | 'VIEW';
};

export function useEditOrganizacaoController() {
  const [members, setMembers] = useState<objectMember[]>([]);
  const [email, setEmail] = useState('');

  const handleAddMember = () => {
    if (!email) return;

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

  //não mexer
  const { mutateAsync: removeOrganization, isPending: isLoadingDelete } =
    useMutation({
      mutationFn: (data: string) => organizationService.deleteGroup(data),
    });

  //não mexer
  async function handleDeleteOrganization(id: string) {
    try {
      await removeOrganization(id);

      queryClient.invalidateQueries({ queryKey: ['organizationsIMemberOf'] });

      toast.success('Organização foi deletada');
    } catch {
      toast.error('Não foi possível deletar a conta');
    }
  }

  return {
    handleSubmit,
    register,
    errors,
    isLoading,

    members,
    email,
    setEmail,
    handleAddMember,
    handleRemoveMember,

    // não mexer
    handleDeleteOrganization,
    isLoadingDelete,
  };
}
