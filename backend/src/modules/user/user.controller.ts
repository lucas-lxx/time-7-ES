import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError
} from "@prisma/client/runtime/library";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(":email")
  async findByEmail(@Param("email") email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return user;
  }

  @Patch(":email")
  async update(
    @Param("email") email: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      return await this.userService.update(email, updateUserDto);
    } catch (err) {
      if (err instanceof PrismaClientValidationError) {
        throw new BadRequestException("invalid options for update");
      }
      throw new InternalServerErrorException();
    }
  }

  @Delete(":email")
  async removeByEmail(@Param("email") email: string) {
    try {
      return await this.userService.removeByEmail(email);
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException("User not found");
      }
      throw new InternalServerErrorException();
    }
  }
}
