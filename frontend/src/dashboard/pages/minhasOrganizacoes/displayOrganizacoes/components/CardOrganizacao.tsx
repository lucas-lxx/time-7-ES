import { dateBr } from '@/app/utils/dateBr';
import EdicaoCard from '@/dashboard/pages/minhasOrganizacoes/editOrganizacoes/components/EdicaoCard';
import { useDashboard } from '@/dashboard/DashboardContext/useDashboard';

import { type organizationResponse } from '@/app/services/organizationService/getAll';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardOrganizacaoProps {
  organizacao: organizationResponse;
}

export default function CardOrganizacao({ organizacao }: CardOrganizacaoProps) {
  const { selectOrganization } = useDashboard();
  const { name, description, createdAt } = organizacao;
  const dataFormatada = dateBr(createdAt);

  return (
    <Card
      className='w-60 h-86 {/*bg-blue-900*/} shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm pt-2 cursor-pointer'
      onClick={() => selectOrganization(organizacao)}
    >
      <CardContent className=''>
        <img
          src='../../../cardImage.svg'
          alt='Imagem da organização'
          className=' w-[100%] object-cover  rounded-xs '
        />
      </CardContent>
      <CardHeader className=' my-0.5'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className='text-xs text-gray-500'>
        Criado em {dataFormatada}
        <EdicaoCard />
      </CardFooter>
    </Card>
  );
}
