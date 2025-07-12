import { ApiProperty } from "@nestjs/swagger";
import { Permission } from "@prisma/client";
import { IsEmail, IsEnum } from "class-validator";

export class MemberDto {
  @ApiProperty({
    example: "yuri@example.com"
  })
  @IsEmail()
  userEmail: string;

  @ApiProperty({ example: Permission.EDIT })
  @IsEnum(Permission)
  permission: Permission;
}
