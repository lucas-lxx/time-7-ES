import { Expense, User } from "@prisma/client";

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
