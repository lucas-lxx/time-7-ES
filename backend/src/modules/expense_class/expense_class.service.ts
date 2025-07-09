import { Injectable } from '@nestjs/common';
import { CreateExpenseClassDto } from './dto/create-expense_class.dto';
import { UpdateExpenseClassDto } from './dto/update-expense_class.dto';

@Injectable()
export class ExpenseClassService {
  create(createExpenseClassDto: CreateExpenseClassDto) {
    return 'This action adds a new expenseClass';
  }

  findAll() {
    return `This action returns all expenseClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseClass`;
  }

  update(id: number, updateExpenseClassDto: UpdateExpenseClassDto) {
    return `This action updates a #${id} expenseClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseClass`;
  }
}
