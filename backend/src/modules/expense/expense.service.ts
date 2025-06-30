import { Injectable } from "@nestjs/common";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { UpdateExpenseDto } from "./dto/update-expense.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class ExpenseService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createExpenseDto: CreateExpenseDto) {
    return "This action adds a new expense";
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
