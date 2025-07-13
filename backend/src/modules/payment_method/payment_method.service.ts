import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class PaymentMethodService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createPaymentMethodDto: CreatePaymentMethodDto & { userId: string }
  ) {
    const payment = await this.prisma.paymentMethod.create({
      data: {
        type: createPaymentMethodDto.type,
        label: createPaymentMethodDto.label,
        last4: createPaymentMethodDto.last4,
        userId: createPaymentMethodDto.userId
      }
    });
    return payment;
  }

  async findAll(userId: string) {
    return await this.prisma.paymentMethod.findMany({
      where: { userId },
      orderBy: {
        id: "desc"
      }
    });
  }

  async findOne(id: string, userId: string) {
    const payment = await this.prisma.paymentMethod.findFirst({
      where: { id, userId }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado");
    }

    return payment;
  }

  async update(
    id: string,
    userId: string,
    updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    const payment = await this.prisma.paymentMethod.findFirst({
      where: { id, userId }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado.");
    }

    return await this.prisma.paymentMethod.update({
      where: { id },
      data: {
        type: updatePaymentMethodDto.type,
        label: updatePaymentMethodDto.label
      }
    });
  }

  async remove(id: string, userId: string) {
    const payment = await this.prisma.paymentMethod.findFirst({
      where: { id, userId }
    });

    if (!payment) {
      throw new NotFoundException("Payment não encontrado");
    }

    return await this.prisma.paymentMethod.delete({
      where: { id }
    });
  }
}
