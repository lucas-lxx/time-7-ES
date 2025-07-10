import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserId } from "src/shared/decorators/userId";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(
    @UserId() userId: string,
    @Body() createGroupDto: CreateGroupDto
  ) {
    return await this.groupService.create(userId, createGroupDto);
  }

  @Get()
  async findAll() {
    return this.groupService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateGroupDto: UpdateGroupDto
  ) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.groupService.remove(+id);
  }
}
