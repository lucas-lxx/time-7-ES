import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "../dto/create-group.dto";
import { UpdateGroupDto } from "../dto/update-group.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { Permission } from "@prisma/client";

@Injectable()
export class GroupService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: string, createGroupDto: CreateGroupDto) {
    const group = await this.prismaService.group.create({
      data: {
        ownerId: userId,
        ...createGroupDto,
        groupUser: {
          create: {
            userId: userId,
            permission: Permission.EDIT
          }
        }
      }
    });

    return group;
  }

  async findAll(userId: string) {
    return await this.prismaService.group.findMany({
      where: {
        ownerId: userId
      },
      include: {
        groupUser: {
          select: {
            permission: true,
            User: {
              select: {
                email: true,
                name: true
              }
            }
          }
        }
      }
    });
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
