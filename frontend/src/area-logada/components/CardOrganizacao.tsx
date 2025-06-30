import {
  Card,
  CardAction,
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
    <Card className='w-full max-w-sm h-64 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between'>
      <CardHeader>
        <CardTitle className='text-xl text-red-500'>{title}</CardTitle>
        <CardDescription className='text-sm text-gray-600'>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className='flex items-center justify-center'>
        <img
          src='/placeholder.png'
          alt='Imagem da organização'
          className='w-24 h-24 object-cover rounded-full'
        />
      </CardContent>

      <CardFooter className='text-xs text-gray-500'>
        Criado em {date}
      </CardFooter>
    </Card>
  );
}
