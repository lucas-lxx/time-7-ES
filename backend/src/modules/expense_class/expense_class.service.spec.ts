import { Test, TestingModule } from "@nestjs/testing";
import { ExpenseClassService } from "./expense_class.service";

describe("ExpenseClassService", () => {
  let service: ExpenseClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseClassService]
    }).compile();

    service = module.get<ExpenseClassService>(ExpenseClassService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
