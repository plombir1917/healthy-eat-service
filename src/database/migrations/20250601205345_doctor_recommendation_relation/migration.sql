/*
  Warnings:

  - Added the required column `doctor_id` to the `recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recommendation" ADD COLUMN     "doctor_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "recommendation" ADD CONSTRAINT "recommendation_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
