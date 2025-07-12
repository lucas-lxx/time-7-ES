import { ApiProperty } from "@nestjs/swagger";
import { Permission } from "@prisma/client";

export class CreateGroupUserDto {
  @ApiProperty({ format: "uuid" })
  groupId: string;

  @ApiProperty({ format: "uuid" })
  userId: string;

  @ApiProperty({ enum: Permission })
  permission: Permission;
}

export class AddMembersResponseDto {
  @ApiProperty({
    type: [String],
    description: "List of emails that could not be added",
    example: ["invalid@example.com"]
  })
  errors: string[];

  @ApiProperty({
    type: [CreateGroupUserDto],
    description: "Successfully added group members"
  })
  added: CreateGroupUserDto[];
}
