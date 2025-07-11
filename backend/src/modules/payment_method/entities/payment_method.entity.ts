import { Expense } from './expense.entity';
import { User } from '.user/entities/user.entity.ts';

export class PaymentMethod {
  id: string;
  type: string;
  label: string;
  last4?: string | null;
  created_at: Date;
  Expense: Expense[];
  User: User;
  userId: string;
}
