/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `ExpenseClass` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `PaymentMethod` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `RefreshToken` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ExpenseClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "ExpenseClass" DROP CONSTRAINT "ExpenseClass_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "PaymentMethod" DROP CONSTRAINT "PaymentMethod_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userEmail_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExpenseClass" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaymentMethod" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseClass" ADD CONSTRAINT "ExpenseClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
