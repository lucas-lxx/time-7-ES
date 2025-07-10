import { Module } from "@nestjs/common";
import { GroupService } from "./services/group.service";
import { GroupController } from "./group.controller";
import { GroupUserService } from "./services/group-user.service";

@Module({
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
