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
import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { UserId } from "src/shared/decorators/userId";

@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post()
  async create(
    @UserId(ParseUUIDPipe) userId: string,
    @Body() createPaymentMethodDto: CreatePaymentMethodDto
  ) {
    return await this.paymentMethodService.create({
      ...createPaymentMethodDto,
      userId
    });
  }

  @Get()
  async findAll(@UserId(ParseUUIDPipe) userId: string) {
    return await this.paymentMethodService.findAll(userId);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @UserId(ParseUUIDPipe) userId: string
  ) {
    return await this.paymentMethodService.findOne(id, userId);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @UserId(ParseUUIDPipe) userId: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    return await this.paymentMethodService.update(
      id,
      userId,
      updatePaymentMethodDto
    );
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @UserId(ParseUUIDPipe) userId: string) {
    return await this.paymentMethodService.remove(id, userId);
  }
}
