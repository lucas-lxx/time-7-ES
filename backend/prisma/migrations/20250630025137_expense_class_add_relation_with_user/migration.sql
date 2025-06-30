-- AlterTable
ALTER TABLE "ExpenseClass" ADD COLUMN     "userEmail" TEXT;

-- AddForeignKey
ALTER TABLE "ExpenseClass" ADD CONSTRAINT "ExpenseClass_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
