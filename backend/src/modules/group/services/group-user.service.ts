import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateGroupUserDto } from "../dto/create-group-user.dto";
import { UserService } from "src/modules/user/user.service";
import { MemberDto } from "../dto/member.dto";
import { Permission } from "@prisma/client";

@Injectable()
export class GroupUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService
  ) {}

  private async memberEmailToCreateGroupUserDto(
    groupId: string,
    members: MemberDto[]
  ): Promise<{
    errors: string[];
    added: CreateGroupUserDto[];
  }> {
    const emails = members.map(member => member.userEmail);
    const usersData = await this.userService.findByEmails(emails);

    const emailToId = new Map(usersData.map(user => [user.email, user.id]));
    const errors: string[] = [];
    const added: CreateGroupUserDto[] = [];
    for (const member of members) {
      const uuid = emailToId.get(member.userEmail);

      if (!uuid) {
        errors.push(member.userEmail);
        continue;
      }

      added.push({
        groupId: groupId,
        userId: uuid,
        permission: member.permission
      });
    }

    return { errors, added };
  }

  async addMembers(groupId: string, memberDto: MemberDto[]) {
    const { errors, added } = await this.memberEmailToCreateGroupUserDto(
      groupId,
      memberDto
    );
    await this.prismaService.groupUser.createMany({
      data: added,
      skipDuplicates: true
    });

    return { errors, added };
  }
}
