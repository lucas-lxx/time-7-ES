import { createContext, useState } from 'react';
import { type organizationResponse } from '@/app/services/organizationService/getAll.ts';

interface DashboardContextValue {
  selectedOrganization: null | organizationResponse;
  selectOrganization(org: organizationResponse): void;
  clearSelectedOrganization(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [selectedOrganization, setSelectedOrganization] =
    useState<null | organizationResponse>(null);

  const selectOrganization = (org: organizationResponse) => {
    setSelectedOrganization(org);
    //console.log('contextArquivo:', { org });
  };

  const clearSelectedOrganization = () => setSelectedOrganization(null);

  return (
    <DashboardContext.Provider
      value={{
        clearSelectedOrganization,
        selectOrganization,
        selectedOrganization,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
