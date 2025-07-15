import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  NotFoundException,
  InternalServerErrorException,
  Res
} from "@nestjs/common";
import {
  ApiBody,
  ApiExtraModels,
  ApiOperation,
  ApiParam,
  ApiResponse,
  getSchemaPath
} from "@nestjs/swagger";
import {
  GroupResponseDto,
  GroupWithErrorsResponseDto
} from "./dto/response-group.dto";
import { GroupService } from "./services/group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserId } from "src/shared/decorators/userId";
import { Response } from "express";
import { MemberDto } from "./dto/member.dto";
import { GroupUserService } from "./services/group-user.service";
import { AddMembersResponseDto } from "./dto/create-group-user.dto";

@Controller("group")
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupUserService: GroupUserService
  ) {}

  @ApiExtraModels(GroupResponseDto, GroupWithErrorsResponseDto)
  @ApiOperation({ summary: "Create a group" })
  @ApiResponse({
    status: 201,
    description: "Group created successfully",
    schema: { $ref: getSchemaPath(GroupResponseDto) }
  })
  @ApiResponse({
    status: 207,
    description: "Group created but with user errors",
    schema: { $ref: getSchemaPath(GroupWithErrorsResponseDto) }
  })
  @Post()
  async create(
    @UserId(ParseUUIDPipe) userId: string,
    @Body() createGroupDto: CreateGroupDto,
    @Res() res: Response
  ) {
    const { errors, group } = await this.groupService.create(
      userId,
      createGroupDto
    );

    if (errors.length > 0) {
      res.status(207).json({
        errors: errors,
        group: group
      });
    }

    return res.status(201).json(group);
  }
  @ApiOperation({ summary: "Add members to a group" })
  @ApiParam({
    name: "groupId",
    description: "UUID of the group",
    type: "string",
    format: "uuid"
  })
  @ApiBody({
    type: [MemberDto],
    description: "List of members to add (email and permission)"
  })
  @ApiResponse({
    status: 201,
    description: "Members added to the group",
    type: AddMembersResponseDto
  })
  @Post(":groupId/members")
  async addMember(
    @UserId(ParseUUIDPipe) userId: string,
    @Param("groupId", ParseUUIDPipe) groupId: string,
    @Body() membersDto: MemberDto[]
  ) {
    return await this.groupService.addMembers(userId, groupId, membersDto);
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
    return await this.groupService.findOneWithUsers(userId, groupId);
  }

  @ApiOperation({
    summary: "Update group by id, pass data on body"
  })
  @ApiBody({
    description: "Fields to update in the group",
    schema: {
      example: {
        name: "Updated Group Name",
        description: "This is an optional updated description",
        members: [
          { userEmail: "newuser@example.com", permission: "VIEW" },
          { userEmail: "otheruser@example.com", permission: "EDIT" }
        ]
      }
    }
  })
  @Patch(":groupId")
  async update(
    @Param("groupId", ParseUUIDPipe) groupId: string,
    @Body() updateGroupDto: UpdateGroupDto
  ) {
    return await this.groupService.update(groupId, updateGroupDto);
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

  @ApiOperation({
    summary: "Remove group by id of the logged user",
    description: "Only the owner of the group can delete it"
  })
  @Delete(":groupId/member/:userId")
  async removeMemberById(
    @UserId(ParseUUIDPipe) ownerId: string,
    @Param("userId") userId: string,
    @Param("groupId") groupId: string
  ) {
    try {
      return await this.groupService.removeMemberById(ownerId, userId, groupId);
    } catch (err) {
      if ((err = "p2025")) {
        throw new NotFoundException("Group not found");
      }
      throw new InternalServerErrorException();
    }
  }
}
