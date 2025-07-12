import { Expense, User } from "@prisma/client";

export class ExpenseClassMethod {
  id: string;
  name: string;
  Expense: Expense[];
  User: User;
  userId: string;
}
