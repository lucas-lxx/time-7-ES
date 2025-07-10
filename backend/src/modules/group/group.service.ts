import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class GroupService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: string, createGroupDto: CreateGroupDto) {
    return await this.prismaService.group.create({
      data: { ownerId: userId, ...createGroupDto }
    });
  }

  async findAll() {
    return `This action returns all group`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  async remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
