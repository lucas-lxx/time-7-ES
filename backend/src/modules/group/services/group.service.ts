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

  async findOne(userId: string, groupId: string) {
    return await this.prismaService.group.findFirst({
      where: {
        id: groupId,
        AND: {
          groupUser: {
            some: { userId }
          }
        }
      },
      include: {
        groupUser: {
          where: {
            userId
          }
        }
      }
    });
  }

  async update(
    userId: string,
    groupId: string,
    updateGroupDto: UpdateGroupDto
  ) {
    return await this.prismaService.group.update({
      data: updateGroupDto,
      where: {
        id: groupId,
        AND: {
          groupUser: {
            some: { userId }
          }
        }
      }
    });
  }

  async remove(userId: string, groupId: string) {
    return await this.prismaService.group.delete({
      where: {
        id: groupId,
        AND: {
          groupUser: { some: { userId } }
        }
      }
    });
  }
}
