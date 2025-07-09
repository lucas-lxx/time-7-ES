-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('EDIT', 'VIEW');

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupUser" (
    "id_group" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "permission" "Permission" NOT NULL DEFAULT 'VIEW',

    CONSTRAINT "GroupUser_pkey" PRIMARY KEY ("id_group","id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_id_key" ON "Group"("id");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUser" ADD CONSTRAINT "GroupUser_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
