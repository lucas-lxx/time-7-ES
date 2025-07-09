import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
  @Exclude()
  id: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: "lucas@example.com",
    description: "User email address"
  })
  email: string;
  @IsNotEmpty()
  @ApiProperty({
    example: "Lucas",
    description: "User name"
  })
  name: string;
  @IsNotEmpty()
  @ApiProperty({
    example: "asdf",
    description: "User password"
  })
  password: string;
}
