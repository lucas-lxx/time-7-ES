import { Module } from "@nestjs/common";
import { ExpenseClassService } from "./expense_class.service";
import { ExpenseClassController } from "./expense_class.controller";

@Module({
  controllers: [ExpenseClassController],
  providers: [ExpenseClassService]
})
export class ExpenseClassModule {}
