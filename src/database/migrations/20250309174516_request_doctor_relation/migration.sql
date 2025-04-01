/*
  Warnings:

  - Added the required column `doctor_id` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "request" ADD COLUMN     "doctor_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
