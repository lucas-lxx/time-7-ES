import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardProps {
  id: string;
  title: string;
  description?: string;
  date: string;
}

export default function CardOrganizacao({
  title,
  description,
  date,
}: CardProps) {
  return (
    <Card
      className='w-60 h-86 {/*bg-blue-900*/} shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm pt-2 cursor-pointer'
      onClick={() => console.log('Card clicked')}
    >
      <CardContent className=''>
        <img
          src='../../../cardImage.svg'
          alt='Imagem da organização'
          className=' w-[100%] object-cover  rounded-xs '
        />
      </CardContent>
      <CardHeader className=' my-0.5'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className='text-xs text-gray-500'>
        Criado em {date}
      </CardFooter>
    </Card>
  );
}
