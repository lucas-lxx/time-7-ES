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

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam
} from "@nestjs/swagger";

@ApiTags("payment-method")
@ApiBearerAuth()
@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: "Create a new payment method" })
  @ApiResponse({
    status: 201,
    description: "Payment method created successfully"
  })
  @ApiResponse({ status: 400, description: "Invalid input" })
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

  @ApiOperation({ summary: "List all payment methods of the user" })
  @ApiResponse({ status: 200, description: "List of payment methods" })
  @Get()
  async findAll(@UserId(ParseUUIDPipe) userId: string) {
    return await this.paymentMethodService.findAll(userId);
  }

  @ApiOperation({ summary: "Get a payment method by ID" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Payment method found" })
  @ApiResponse({ status: 404, description: "Payment method not found" })
  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @UserId(ParseUUIDPipe) userId: string
  ) {
    return await this.paymentMethodService.findOne(id, userId);
  }

  @ApiOperation({ summary: "Update a payment method" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Payment method updated" })
  @ApiResponse({ status: 404, description: "Payment method not found" })
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

  @ApiOperation({ summary: "Delete a payment method" })
  @ApiParam({ name: "id", type: "string", format: "uuid" })
  @ApiResponse({ status: 200, description: "Payment method deleted" })
  @ApiResponse({ status: 404, description: "Payment method not found" })
  @Delete(":id")
  async remove(@Param("id") id: string, @UserId(ParseUUIDPipe) userId: string) {
    return await this.paymentMethodService.remove(id, userId);
  }
}
