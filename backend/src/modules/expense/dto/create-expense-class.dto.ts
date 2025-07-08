import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateExpenseClassDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
}
