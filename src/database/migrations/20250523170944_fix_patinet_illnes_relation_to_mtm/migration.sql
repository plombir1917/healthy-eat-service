/*
  Warnings:

  - You are about to drop the column `patient_id` on the `illness` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "illness" DROP CONSTRAINT "illness_patient_id_fkey";

-- AlterTable
ALTER TABLE "illness" DROP COLUMN "patient_id";

-- CreateTable
CREATE TABLE "illness_on_patient" (
    "illness_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,

    CONSTRAINT "illness_on_patient_pkey" PRIMARY KEY ("illness_id","patient_id")
);

-- AddForeignKey
ALTER TABLE "illness_on_patient" ADD CONSTRAINT "illness_on_patient_illness_id_fkey" FOREIGN KEY ("illness_id") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illness_on_patient" ADD CONSTRAINT "illness_on_patient_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
