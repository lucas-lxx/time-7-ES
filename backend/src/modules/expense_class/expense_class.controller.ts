import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe
} from "@nestjs/common";
import { ExpenseClassService } from "./expense_class.service";
import { CreateExpenseClassDto } from "./dto/create-expense_class.dto";
import { UpdateExpenseClassDto } from "./dto/update-expense_class.dto";
import { UserId } from "src/shared/decorators/userId";

@Controller("expense-class")
export class ExpenseClassController {
  constructor(private readonly expenseClassService: ExpenseClassService) {}

  @Post()
  async create(
    @UserId(ParseUUIDPipe) userId: string,
    @Body() createExpenseClassDto: CreateExpenseClassDto
  ) {
    return await this.expenseClassService.create({
      ...createExpenseClassDto,
      userId
    });
  }

  @Get()
  async findAll(@UserId(ParseUUIDPipe) userId: string) {
    return await this.expenseClassService.findAll(userId);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @UserId(ParseUUIDPipe) userId: string
  ) {
    return await this.expenseClassService.findOne(id, userId);
  }

  @Patch(":id")
  async update(
    @UserId(ParseUUIDPipe) userId: string,
    @Param("id") id: string,
    @Body() updateExpenseClassDto: UpdateExpenseClassDto
  ) {
    return await this.expenseClassService.update(
      id,
      userId,
      updateExpenseClassDto
    );
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @UserId(ParseUUIDPipe) userId: string) {
    return await this.expenseClassService.remove(id, userId);
  }
}
