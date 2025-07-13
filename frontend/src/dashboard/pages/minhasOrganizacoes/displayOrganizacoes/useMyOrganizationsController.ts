import { useQuery } from '@tanstack/react-query';
import { organizationService } from '@/app/services/organizationService';
export function useMyOrganizationsController() {
  // AQUI

  const { data = [], isFetching } = useQuery({
    queryKey: ['organizationsIMemberOf'],
    queryFn: organizationService.getAll,
  });

  return {
    myOrganizations: data,
    isLoading: isFetching,
  };
}
