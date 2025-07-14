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

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth
} from "@nestjs/swagger";

@ApiTags("expense-class")
@ApiBearerAuth()
@Controller("expense-class")
export class ExpenseClassController {
  constructor(private readonly expenseClassService: ExpenseClassService) {}

  @ApiOperation({ summary: "Create a new expense class" })
  @ApiResponse({
    status: 201,
    description: "Expense class created successfully"
  })
  @ApiResponse({ status: 400, description: "Invalid input" })
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

  @ApiOperation({ summary: "List all expense classes for the user" })
  @ApiResponse({ status: 200, description: "List of expense classes" })
  @Get()
  async findAll(@UserId(ParseUUIDPipe) userId: string) {
    return await this.expenseClassService.findAll(userId);
  }

  @ApiOperation({ summary: "Find one expense class by ID" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Expense class found" })
  @ApiResponse({ status: 404, description: "Expense class not found" })
  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @UserId(ParseUUIDPipe) userId: string
  ) {
    return await this.expenseClassService.findOne(id, userId);
  }

  @ApiOperation({ summary: "Update an expense class by ID" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Expense class updated" })
  @ApiResponse({ status: 404, description: "Expense class not found" })
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

  @ApiOperation({ summary: "Delete an expense class by ID" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Expense class deleted" })
  @ApiResponse({ status: 404, description: "Expense class not found" })
  @Delete(":id")
  async remove(@Param("id") id: string, @UserId(ParseUUIDPipe) userId: string) {
    return await this.expenseClassService.remove(id, userId);
  }
}
