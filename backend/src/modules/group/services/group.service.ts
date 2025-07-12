import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "../dto/create-group.dto";
import { UpdateGroupDto } from "../dto/update-group.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { Permission } from "@prisma/client";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class GroupService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService
  ) {}

  async create(userId: string, createGroupDto: CreateGroupDto) {
    const { name, description, members } = createGroupDto;
    const emails = members.map(member => member.userEmail);
    const usersData = await this.userService.findByEmails(emails);

    const emailToId = new Map(usersData.map(user => [user.email, user.id]));
    const errors: string[] = [];
    const added: { userId: string; permission: Permission }[] = [];
    for (const member of members) {
      const uuid = emailToId.get(member.userEmail);

      if (!uuid) {
        errors.push(member.userEmail);
        continue;
      }

      added.push({
        userId: uuid,
        permission: member.permission
      });
    }

    added.push({ userId, permission: Permission.EDIT });

    const group = await this.prismaService.group.create({
      data: {
        ownerId: userId,
        name,
        description,
        groupUser: {
          createMany: {
            data: added
          }
        }
      }
    });

    return { errors, group };
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
          ownerId: userId
        }
      }
    });
  }
}
