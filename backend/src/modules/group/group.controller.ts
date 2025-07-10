import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from "@nestjs/common";
import { GroupService } from "./services/group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserId } from "src/shared/decorators/userId";
import { ApiOperation } from "@nestjs/swagger";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiOperation({
    summary: "Create a group"
  })
  async create(
    @UserId() userId: string,
    @Body() createGroupDto: CreateGroupDto
  ) {
    return await this.groupService.create(userId, createGroupDto);
  }

  @ApiOperation({
    summary: "Find all groups of the logged user"
  })
  @Get()
  async findAll(@UserId() userId: string) {
    return await this.groupService.findAll(userId);
  }

  @Get(":id")
  async findOne(@UserId() userId: string, @Param("id") groupId: string) {
    return await this.groupService.findOne(userId, groupId);
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
