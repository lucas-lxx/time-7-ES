import { ApiProperty } from "@nestjs/swagger";

export class GroupResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  ownerId: string;
}

export class GroupWithErrorsResponseDto {
  @ApiProperty({
    type: [String],
    items: { type: "string", format: "email" },
    example: ["matheus@example.com"]
  })
  errors: string[];

  @ApiProperty({ type: GroupResponseDto })
  group: GroupResponseDto;
}
