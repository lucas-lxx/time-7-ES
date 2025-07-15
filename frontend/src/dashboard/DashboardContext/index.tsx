import { createContext, useState } from 'react';
import { type organizationResponse } from '@/app/services/organizationService/getAll.ts';
import { useMyOrganizationsController } from '@/dashboard/pages/minhasOrganizacoes/displayOrganizacoes/useMyOrganizationsController.ts';

interface DashboardContextValue {
  selectedOrganization: null | organizationResponse;
  selectOrganization(org: organizationResponse): void;
  clearSelectedOrganization(): void;
  toSearchOrganization(id: string): organizationResponse | null;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const { myOrganizations } = useMyOrganizationsController();

  const [selectedOrganization, setSelectedOrganization] =
    useState<null | organizationResponse>(null);

  const selectOrganization = (org: organizationResponse) => {
    setSelectedOrganization(org);
    //console.log('contextArquivo:', { org });
  };

  const clearSelectedOrganization = () => setSelectedOrganization(null);

  const toSearchOrganization = (id: string): organizationResponse | null => {
    return myOrganizations.find((org) => org.id === id) || null;
  };

  return (
    <DashboardContext.Provider
      value={{
        toSearchOrganization,
        clearSelectedOrganization,
        selectOrganization,
        selectedOrganization,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
