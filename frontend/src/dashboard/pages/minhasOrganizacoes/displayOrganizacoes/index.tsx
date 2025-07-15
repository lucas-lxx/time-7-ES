import CardOrganizacao from './components/CardOrganizacao';
import { useMyOrganizationsController } from './useMyOrganizationsController';
import { PageLoader } from '@/view/components/PageLoader';
import { PageEmptyGroup } from '@/view/components/PageEmptyGroup';

export default function DisplayOrganizacoes() {
  const { isLoading, myOrganizations } = useMyOrganizationsController();

  if (isLoading) return <PageLoader />;

  return (
    <div className='flex flex-wrap px-4 gap-x-4 gap-y-6 max-sm:gap-y-1 max-sm:h-[85%] h-[90%] '>
      {myOrganizations.length === 0 ? (
        <PageEmptyGroup />
      ) : (
        myOrganizations.map((org) => (
          <CardOrganizacao key={org.id} organizacao={org} />
        ))
      )}
    </div>
  );
}
