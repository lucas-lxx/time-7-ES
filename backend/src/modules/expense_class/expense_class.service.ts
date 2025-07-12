import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateExpenseClassDto } from "./dto/create-expense_class.dto";
import { UpdateExpenseClassDto } from "./dto/update-expense_class.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class ExpenseClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExpenseClassDto: CreateExpenseClassDto) {
    const name = await this.prisma.expenseClass.create({
      data: {
        name: createExpenseClassDto.name,
        userId: createExpenseClassDto.userId
      }
    });
    return name;
  }

  async findAll() {
    return await this.prisma.expenseClass.findMany({
      orderBy: {
        id: "desc"
      }
    });
  }

  async findOne(id: string) {
    const expense = await this.prisma.expenseClass.findUnique({
      where: { id }
    });

    if (!expense) {
      throw new NotFoundException("Expense Class não encontrado");
    }

    return expense;
  }

  async update(id: string, updateExpenseClassDto: UpdateExpenseClassDto) {
    const name = await this.prisma.expenseClass.findUnique({
      where: { id }
    });

    if (!name) {
      throw new NotFoundException("Expense Class não encontrado");
    }

    return await this.prisma.expenseClass.update({
      where: { id },
      data: {
        name: updateExpenseClassDto.name
      }
    });
  }

  async remove(id: string) {
    const expense = await this.prisma.expenseClass.findUnique({
      where: { id }
    });

    if (!expense) {
      throw new NotFoundException("Expense Class não encontrado");
    }

    return await this.prisma.expenseClass.delete({
      where: { id }
    });
  }
}
