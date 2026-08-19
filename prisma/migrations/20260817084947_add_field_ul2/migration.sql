/*
  Warnings:

  - You are about to drop the column `urlImages` on the `Party` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Party" DROP COLUMN "urlImages",
ADD COLUMN     "imageUrl" TEXT;
