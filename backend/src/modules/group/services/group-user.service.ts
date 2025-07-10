import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { CreateGroupUserDto } from "../dto/create-group-user.dto";

@Injectable()
export class GroupUserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGroupUserDto: CreateGroupUserDto) {
    const groupUser = await this.prismaService.groupUser.create({
      data: createGroupUserDto
    });

    return groupUser;
  }
}
