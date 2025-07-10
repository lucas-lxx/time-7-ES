import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGroupDto {
  @ApiProperty({
    example: "Home",
    description: "Creates the name of the group"
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: "House expenses",
    description: "Creates description for the group"
  })
  description?: string;
}
