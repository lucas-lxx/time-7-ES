import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateExpenseClassDto {
  @ApiProperty({ example: "RU", description: "Has the class of the expense" })
  @IsString()
  name: string;
}
