import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Permission } from "@prisma/client";
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { MemberDto } from "./member.dto";

export class CreateGroupDto {
  @ApiProperty({
    example: "Home",
    description: "Creates the name of the group"
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    example: "House expenses",
    description: "Creates description for the group"
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: [
      { userEmail: "yuri@example.com", permission: Permission.EDIT },
      { userEmail: "matheus@example.com", permission: Permission.VIEW }
    ],
    description: ""
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MemberDto)
  members: MemberDto[];
}
