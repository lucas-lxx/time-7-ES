import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateExpenseClassDto } from "./dto/create-expense_class.dto";
import { UpdateExpenseClassDto } from "./dto/update-expense_class.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class ExpenseClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createExpenseClassDto: CreateExpenseClassDto & { userId: string }
  ) {
    const name = await this.prisma.expenseClass.create({
      data: {
        name: createExpenseClassDto.name,
        userId: createExpenseClassDto.userId
      }
    });

    return name;
  }

  async findAll(userId: string) {
    return await this.prisma.expenseClass.findMany({
      where: { userId },
      orderBy: {
        id: "desc"
      }
    });
  }

  async findOne(id: string, userId: string) {
    const expense = await this.prisma.expenseClass.findFirst({
      where: { id, userId }
    });

    if (!expense) {
      throw new NotFoundException("Expense Class não encontrado");
    }

    return expense;
  }

  async update(
    id: string,
    userId: string,
    updateExpenseClassDto: UpdateExpenseClassDto
  ) {
    const name = await this.prisma.expenseClass.findFirst({
      where: { id, userId }
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

  async remove(id: string, userId: string) {
    const expense = await this.prisma.expenseClass.findFirst({
      where: { id, userId }
    });

    if (!expense) {
      throw new NotFoundException("Expense Class não encontrado");
    }

    return await this.prisma.expenseClass.delete({
      where: { id }
    });
  }
}
