/*
  Warnings:

  - You are about to drop the column `callDate` on the `SupportCall` table. All the data in the column will be lost.
  - You are about to drop the column `resolvedDate` on the `SupportCall` table. All the data in the column will be lost.
  - You are about to drop the column `assignedToId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `practiceId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `supportCallId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuickNote` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `practiceId` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `pdatedAt` to the `CallNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_supportCallId_fkey";

-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_uploadedById_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "CallNote" DROP CONSTRAINT "CallNote_supportCallId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "QuickNote" DROP CONSTRAINT "QuickNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_practiceId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_supportCallId_fkey";

-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "practiceId" SET NOT NULL;

-- AlterTable
ALTER TABLE "CallNote" ADD COLUMN     "pdatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SupportCall" DROP COLUMN "callDate",
DROP COLUMN "resolvedDate";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "assignedToId",
DROP COLUMN "practiceId",
DROP COLUMN "supportCallId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordHash",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "role" SET DEFAULT 'USER';

-- DropTable
DROP TABLE "Attachment";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "QuickNote";

-- AddForeignKey
ALTER TABLE "CallNote" ADD CONSTRAINT "CallNote_supportCallId_fkey" FOREIGN KEY ("supportCallId") REFERENCES "SupportCall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
