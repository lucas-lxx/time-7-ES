import { Permission } from "@prisma/client";
import { IsEnum, IsUUID } from "class-validator";

export class CreateGroupUserDto {
  @IsUUID()
  groupId: string;
  @IsUUID()
  userId: string;
  @IsEnum(Permission)
  permission: Permission;
}
