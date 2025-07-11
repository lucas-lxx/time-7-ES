import { Permission } from "@prisma/client";
import { IsEmail, IsEnum } from "class-validator";

export class MemberDto {
  @IsEmail()
  userEmail: string;

  @IsEnum(Permission)
  permission: Permission;
}
