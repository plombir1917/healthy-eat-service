/*
  Warnings:

  - Added the required column `description` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "request" ADD COLUMN     "description" TEXT NOT NULL;
