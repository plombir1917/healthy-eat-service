/*
  Warnings:

  - Made the column `patient_id` on table `characteristic` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "characteristic" DROP CONSTRAINT "characteristic_patient_id_fkey";

-- AlterTable
ALTER TABLE "characteristic" ALTER COLUMN "patient_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "characteristic" ADD CONSTRAINT "characteristic_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
