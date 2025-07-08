import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from "class-validator";

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  value: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsDate()
  @IsNotEmpty()
  date: Date;
}
