import { Module, ValidationPipe } from "@nestjs/common";
import { APP_GUARD, APP_PIPE } from "@nestjs/core";
import { PrismaModule } from "./shared/prisma/prisma.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./modules/auth/auth.guard";
import { ExpenseClassModule } from "./modules/expense_class/expense_class.module";
import { PaymentMethodModule } from "./modules/payment_method/payment_method.module";
import { GroupModule } from "./modules/group/group.module";
import { ExpenseModule } from "./modules/expense/expense.module";

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    GroupModule,
    ExpenseClassModule,
    PaymentMethodModule,
    ExpenseModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
