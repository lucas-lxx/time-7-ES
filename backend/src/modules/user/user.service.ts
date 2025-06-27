import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { hash } from "bcrypt";
import { SALT_ROUNDS } from "src/shared/constants";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hash(createUserDto.password, SALT_ROUNDS);
    return this.prismaService.user.create({
      data: createUserDto,
      select: {
        name: true,
        email: true,
        created_at: true
      }
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      select: {
        name: true,
        email: true,
        created_at: true
      }
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      select: {
        name: true,
        email: true,
        created_at: true
      },
      where: { email: email }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
