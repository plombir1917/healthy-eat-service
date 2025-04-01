/*
  Warnings:

  - Added the required column `patient_id` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "request" ADD COLUMN     "patient_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
