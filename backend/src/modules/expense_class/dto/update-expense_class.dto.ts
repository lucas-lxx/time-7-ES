import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseClassDto } from './create-expense_class.dto';

export class UpdateExpenseClassDto extends PartialType(CreateExpenseClassDto) {}
