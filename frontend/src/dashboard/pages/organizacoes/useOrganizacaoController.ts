import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
//import { useMutation } from '@tanstack/react-query';
//import { toast } from 'sonner';
//import { organizationService } from '@/app/services/organizationService';
//import { type organizationParams } from '@/app/services/organizationService/create';
//import { useAuth } from '../../../app/hooks/useAuth';

const schema = z.object({
  name: z
    .string()
    .nonempty('Nome da Organização é obrigatório')
    .min(4, 'Mínimo 4 caracteres'),
  description: z.string(),
});

/*
interface organizationProps {
  name: string;
  description?: string | undefined;
}
*/

type FormData = z.infer<typeof schema>;

export type objectMember = {
  userEmail: string;
  permission: 'EDIT' | 'VIEW';
};

export function useOrganizacaoController() {
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
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSubmit = hookFormSubmit(async (data) => {
    const payload = {
      ...data,
      members,
    };

    console.log('submit:', payload);
  });

  return {
    handleSubmit,
    register,
    errors,

    members,
    email,
    setEmail,
    handleAddMember,
    handleRemoveMember,
  };
}
