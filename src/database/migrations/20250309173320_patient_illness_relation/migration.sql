/*
  Warnings:

  - A unique constraint covering the columns `[patient_id]` on the table `characteristic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "characteristic" ADD COLUMN     "patient_id" INTEGER;

-- AlterTable
ALTER TABLE "illness" ADD COLUMN     "patient_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "characteristic_patient_id_key" ON "characteristic"("patient_id");

-- AddForeignKey
ALTER TABLE "illness" ADD CONSTRAINT "illness_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characteristic" ADD CONSTRAINT "characteristic_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
