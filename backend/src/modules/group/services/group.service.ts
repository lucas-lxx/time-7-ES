import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { CreateGroupDto } from "../dto/create-group.dto";
import { UpdateGroupDto } from "../dto/update-group.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { Permission } from "@prisma/client";
import { UserService } from "src/modules/user/user.service";
import { MemberDto } from "../dto/member.dto";
import { GroupUserService } from "./group-user.service";

@Injectable()
export class GroupService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private readonly groupUserService: GroupUserService
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
            data: added,
            skipDuplicates: true
          }
        }
      }
    });

    return { errors, group };
  }

  async addMembers(userId: string, groupId: string, membersDto: MemberDto[]) {
    const group = await this.findOne(userId, groupId);
    if (!group) {
      throw new NotFoundException("Group not found");
    }
    const { errors, added } = await this.groupUserService.addMembers(
      groupId,
      membersDto
    );

    return { errors, added };
  }

  async findAll(userId: string) {
    return await this.prismaService.group.findMany({
      where: {
        groupUser: { some: { userId } }
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
      }
    });
  }

  async findOneWithUsers(userId: string, groupId: string) {
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

  async update(groupId: string, updateDto: UpdateGroupDto) {
    const { name, description, members } = updateDto;

    const dataToUpdate: any = {};
    if (name !== undefined) dataToUpdate.name = name;
    if (description !== undefined) dataToUpdate.description = description;

    let added: { userId: string; permission: Permission }[] = [];
    const errors: string[] = [];

    // Get group including owner and current users
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId },
      include: {
        groupUser: true,
        owner: true
      }
    });

    if (!group) throw new Error("Group not found");

    const ownerId = group.ownerId;

    const currentUserIds = new Set(group.groupUser.map(gu => gu.userId));

    const newUserEmails = members?.map(m => m.userEmail) || [];

    const usersData = await this.userService.findByEmails(newUserEmails);
    const emailToId = new Map(usersData.map(u => [u.email, u.id]));

    const newUserIds = new Set<string>();
    const userIdToPermission = new Map<string, Permission>();

    for (const member of members || []) {
      const uuid = emailToId.get(member.userEmail);

      if (!uuid) {
        errors.push(member.userEmail);
        continue;
      }

      newUserIds.add(uuid);
      userIdToPermission.set(uuid, member.permission);

      if (!currentUserIds.has(uuid)) {
        added.push({
          userId: uuid,
          permission: member.permission
        });
      }
    }

    // Remove users who are no longer in the list, except the owner
    const userIdsToRemove = group.groupUser
      .filter(gu => gu.userId !== ownerId && !newUserIds.has(gu.userId))
      .map(gu => gu.userId);

    if (userIdsToRemove.length > 0) {
      await this.prismaService.groupUser.deleteMany({
        where: {
          groupId,
          userId: { in: userIdsToRemove }
        }
      });
    }

    // Update name/description
    const updatedGroup = await this.prismaService.group.update({
      where: { id: groupId },
      data: dataToUpdate
    });

    // Add new users
    if (added.length) {
      await this.prismaService.groupUser.createMany({
        data: added.map(user => ({
          groupId,
          ...user
        })),
        skipDuplicates: true
      });
    }

    console.log(group);

    return { errors, group: updatedGroup };
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

  async removeMemberById(ownerId: string, userId: string, groupId: string) {
    const group = await this.findOne(ownerId, groupId);
    if (!group) {
      throw new NotFoundException("Group not found");
    }
    if (group.ownerId !== ownerId) {
      throw new ForbiddenException("Only group owner can remove an user");
    }
    if (userId === ownerId) {
      throw new ForbiddenException("Group owner cannot remove themselves");
    }
    return await this.prismaService.groupUser.delete({
      where: {
        groupId_userId: {
          userId,
          groupId
        }
      }
    });
  }
}
