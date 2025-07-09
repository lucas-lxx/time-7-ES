import { IsString, MaxLength } from "class-validator";

export class CreatePaymentMethodDto {
  @IsString()
  @MaxLength(255)
  nome: string;
    
  @IsString()
  classe_tipo_de_gasto: string ;
}
