import { type CardGastosProp } from '@/dashboard/pages/financeiro/components/CardGastos';

interface mockCardGastoProps extends CardGastosProp {
  id: number;
}

export const mockCardGasto: mockCardGastoProps[] = [
  {
    id: 1,
    titulo: 'Picolé de Sardinha',
    data: '12/05/2024',
    categoria: 'PIX',
    preco: '45.35',
    criadoPor: 'João',
  },
  {
    id: 2,
    titulo: 'Assinatura Spotify',
    data: '08/07/2024',
    categoria: 'CREDITO',
    preco: '19.90',
    criadoPor: 'Maria',
  },
  {
    id: 3,
    titulo: 'Compra Mercado',
    data: '05/07/2024',
    categoria: 'DEBITO',
    preco: '120.75',
    criadoPor: 'Ana',
  },
  {
    id: 4,
    titulo: 'Uber Corrida',
    data: '04/07/2024',
    categoria: 'CREDITO',
    preco: '32.50',
    criadoPor: 'Ana',
  },
  {
    id: 5,
    titulo: 'Farmácia',
    data: '03/07/2024',
    categoria: 'DEBITO',
    preco: '58.90',
    criadoPor: 'Ana',
  },
  {
    id: 6,
    titulo: 'Transferência PIX Aluguel',
    data: '01/07/2024',
    categoria: 'PIX',
    preco: '950.00',
    criadoPor: 'João',
  },
  {
    id: 7,
    titulo: 'iFood Hamburguer',
    data: '30/06/2024',
    categoria: 'CREDITO',
    preco: '28.45',
    criadoPor: 'Lucas',
  },
  {
    id: 8,
    titulo: 'Recarga Celular',
    data: '29/06/2024',
    categoria: 'DEBITO',
    preco: '15.00',
    criadoPor: 'Lucas',
  },
  {
    id: 9,
    titulo: 'Pagamento PIX Freelance',
    data: '28/06/2024',
    categoria: 'PIX',
    preco: '300.00',
    criadoPor: 'Ana',
  },
  {
    id: 10,
    titulo: 'Netflix Mensal',
    data: '27/06/2024',
    categoria: 'CREDITO',
    preco: '39.90',
    criadoPor: 'Ana',
  },
];
