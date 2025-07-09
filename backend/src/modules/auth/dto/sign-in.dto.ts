import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "Email of the account",
    example: "lucas@example.com"
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Password of the account",
    example: "asdf"
  })
  password: string;
}
