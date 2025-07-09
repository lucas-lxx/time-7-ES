import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseClassController } from './expense_class.controller';
import { ExpenseClassService } from './expense_class.service';

describe('ExpenseClassController', () => {
  let controller: ExpenseClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseClassController],
      providers: [ExpenseClassService],
    }).compile();

    controller = module.get<ExpenseClassController>(ExpenseClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
