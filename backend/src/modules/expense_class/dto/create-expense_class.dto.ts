import { IsString } from "class-validator";

export class CreateExpenseClassDto {
  @IsString()
  name: string;
}
