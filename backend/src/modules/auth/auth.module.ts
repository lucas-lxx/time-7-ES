import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { PaymentMethodModule } from "../payment_method/payment_method.module";
import { ExpenseClassModule } from "../expense_class/expense_class.module";

@Module({
  imports: [
    UserModule,
    PaymentMethodModule,
    ExpenseClassModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "2h" }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
