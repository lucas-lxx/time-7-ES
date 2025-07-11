import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe
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
    @UserId(ParseUUIDPipe) userId: string,
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

  @ApiOperation({ summary: "Find group by id of the logged user" })
  @Get(":id")
  async findOne(
    @UserId(ParseUUIDPipe) userId: string,
    @Param("id", ParseUUIDPipe) groupId: string
  ) {
    return await this.groupService.findOne(userId, groupId);
  }

  @Patch(":id")
  async update(
    @UserId() userId: string,
    @Param("id", ParseUUIDPipe) groupId: string,
    @Body() updateGroupDto: UpdateGroupDto
  ) {
    return await this.groupService.update(userId, groupId, updateGroupDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.groupService.remove(+id);
  }
}
