import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: "Use UUID returned as refreshToken when /auth/sign-in",
    example: "21dd49a2-619e-482b-b0bc-6dbec50e5be3"
  })
  refreshToken: string;
}
