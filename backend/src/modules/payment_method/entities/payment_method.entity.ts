import { IsNotEmpty, IsString, IsUUID, MaxLength } from "class-validator";

export class PaymentMethod {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @MaxLength(255)
  nome: string;
  
  @IsString()
  classe_tipo_de_gasto: string ;
}
