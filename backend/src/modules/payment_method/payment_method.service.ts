import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
@Injectable()
export class PaymentMethodService {
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const payment = await prisma.paymentMethod.create({
      data: {
        type: createPaymentMethodDto.type,
        label: createPaymentMethodDto.label,
        last4: createPaymentMethodDto.last4,
        userId: createPaymentMethodDto.userId
      }
    });
    return payment;
  }

  async findAll() {
    return await prisma.paymentMethod.findMany({
      orderBy: {
        id: "desc"
      }
    });
  }

  async findOne(id: string) {
    const payment = await prisma.paymentMethod.findUnique({
      where: { id }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado");
    }

    return payment;
  }

  async update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const payment = await prisma.paymentMethod.findUnique({
      where: { id }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado.");
    }

    return await prisma.paymentMethod.update({
      where: { id },
      data: {
        type: updatePaymentMethodDto.type,
        label: updatePaymentMethodDto.label
      }
    });
  }

  async remove(id: string) {
    const payment = await prisma.paymentMethod.findUnique({
      where: { id }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado");
    }

    return await prisma.paymentMethod.delete({
      where: { id }
    });
  }
}
