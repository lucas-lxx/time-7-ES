import { Module } from "@nestjs/common";
import { GroupService } from "./services/group.service";
import { GroupController } from "./group.controller";
import { GroupUserService } from "./services/group-user.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [GroupController],
  providers: [GroupService, GroupUserService]
})
export class GroupModule {}
