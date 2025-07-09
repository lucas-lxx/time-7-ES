import { IsString } from "class-validator";

export class CreateExpenseClassDto {
  @IsString()
  classe_de_gasto: string;
}
