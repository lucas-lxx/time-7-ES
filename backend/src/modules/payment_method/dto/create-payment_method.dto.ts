import { IsString, IsOptional, IsUUID } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsString()
  type: string;

  @IsString()
  label: string;

  @IsOptional()
  @IsString()
  last4?: string;

  @IsUUID()
  userId: string;
}
