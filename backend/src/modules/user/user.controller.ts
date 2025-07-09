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
import { UserDto } from "./dto/user.dto";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError
} from "@prisma/client/runtime/library";
import { IsPublic } from "src/shared/decorators/isPublic";
import { ApiCreatedResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UserEmail } from "src/shared/decorators/userEmail";
import { User } from "src/shared/decorators/user";
import { plainToClass } from "class-transformer";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @IsPublic()
  @ApiOperation({ summary: "Create a new user" })
  @ApiCreatedResponse({
    description: "The user has been successfully created."
  })
  @ApiResponse({
    status: 400,
    description: "Bad Request",
    example: { nome: "Lucas" }
  })
  @ApiResponse({
    status: 409,
    description: "Unique constraint on email"
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get("/me")
  async findMe(@UserEmail() email: string, @User() user: string) {
    console.log(user);
    console.log(email);
    return plainToClass(UserDto, await this.userService.findByEmail(email));
  }

  @Get("email/:email")
  async findByEmail(@Param("email") email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException("User not found");
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
        throw new BadRequestException("Invalid options for update");
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
