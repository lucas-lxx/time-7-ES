import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from "@nestjs/common";
import { ExpenseClassService } from "./expense_class.service";
import { CreateExpenseClassDto } from "./dto/create-expense_class.dto";
import { UpdateExpenseClassDto } from "./dto/update-expense_class.dto";

@Controller("expense-class")
export class ExpenseClassController {
  constructor(private readonly expenseClassService: ExpenseClassService) {}

  @Post()
  create(@Body() createExpenseClassDto: CreateExpenseClassDto) {
    return this.expenseClassService.create(createExpenseClassDto);
  }

  @Get()
  findAll() {
    return this.expenseClassService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.expenseClassService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateExpenseClassDto: UpdateExpenseClassDto
  ) {
    return this.expenseClassService.update(id, updateExpenseClassDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.expenseClassService.remove(id);
  }
}
