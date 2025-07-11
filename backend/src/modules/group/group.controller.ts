import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  NotFoundException,
  InternalServerErrorException,
  Res
} from "@nestjs/common";
import { GroupService } from "./services/group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserId } from "src/shared/decorators/userId";
import { ApiOperation } from "@nestjs/swagger";
import { Response } from "express";

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

  @ApiOperation({
    summary: "Update group by id of the logged user, pass data on body"
  })
  @Patch(":id")
  async update(
    @UserId(ParseUUIDPipe) userId: string,
    @Param("id", ParseUUIDPipe) groupId: string,
    @Body() updateGroupDto: UpdateGroupDto
  ) {
    return await this.groupService.update(userId, groupId, updateGroupDto);
  }

  @ApiOperation({
    summary: "Remove group by id of the logged user",
    description: "Only the owner of the group can delete it"
  })
  @Delete(":id")
  async remove(
    @UserId(ParseUUIDPipe) userId: string,
    @Param("id") groupId: string
  ) {
    try {
      return await this.groupService.remove(userId, groupId);
    } catch (err) {
      if ((err = "p2025")) {
        throw new NotFoundException("Group not found");
      }
      throw new InternalServerErrorException();
    }
  }
}
