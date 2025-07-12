import {
  ConflictException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { hash } from "bcrypt";
import { SALT_ROUNDS } from "src/shared/constants";
import { UserWithoutPassword } from "./entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { plainToClass } from "class-transformer";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    createUserDto.password = await hash(createUserDto.password, SALT_ROUNDS);
    try {
      const user = await this.prismaService.user.create({
        select: UserWithoutPassword,
        data: createUserDto
      });
      return plainToClass(UserDto, user);
    } catch (err) {
      if (err.code === "P2002") {
        throw new ConflictException("Email is already in use");
      }
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      select: UserWithoutPassword
    });
  }

  async findByEmail(email: string, password: boolean = false) {
    const user = { ...UserWithoutPassword, password: password };
    return await this.prismaService.user.findUnique({
      select: user,
      where: { email }
    });
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      select: UserWithoutPassword,
      data: updateUserDto,
      where: { email }
    });
  }

  async removeByEmail(email: string) {
    return await this.prismaService.user.delete({
      select: UserWithoutPassword,
      where: { email }
    });
  }
}
