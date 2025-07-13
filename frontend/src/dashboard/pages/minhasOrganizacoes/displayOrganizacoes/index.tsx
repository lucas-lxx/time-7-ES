import CardOrganizacao from './components/CardOrganizacao';
import { useMyOrganizationsController } from './useMyOrganizationsController';
import { PageLoader } from '@/view/components/PageLoader';

export default function DisplayOrganizacoes() {
  const { isLoading, myOrganizations } = useMyOrganizationsController();

  if (isLoading) return <PageLoader />;
  return (
    <div className='flex flex-wrap px-4 gap-x-4 gap-y-6 max-sm:gap-y-1 max-sm:h-[85%] h-[90%] '>
      {myOrganizations.map((org) => (
        <CardOrganizacao
          key={org.id}
          id={org.id}
          title={org.name}
          description={org.description}
          date={'12/12/2024'}
        />
      ))}
    </div>
  );
}
