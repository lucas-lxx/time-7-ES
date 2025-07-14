import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreatePaymentMethodDto {
  @ApiProperty({
    description: "The type of the object",
    example: "credit_card"
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: "A human-readable label for the object",
    example: "Visa Platinum"
  })
  @IsString()
  label: string;

  @ApiPropertyOptional({
    description: "Last 4 digits of the card number",
    example: "4242"
  })
  @IsOptional()
  @IsString()
  last4?: string;
}
