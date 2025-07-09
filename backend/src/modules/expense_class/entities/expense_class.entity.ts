import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class ExpenseClass {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  classe_de_gasto: string;
}
