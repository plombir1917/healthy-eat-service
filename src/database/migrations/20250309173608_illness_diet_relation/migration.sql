/*
  Warnings:

  - Added the required column `illness_id` to the `diet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "diet" ADD COLUMN     "illness_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "diet" ADD CONSTRAINT "diet_illness_id_fkey" FOREIGN KEY ("illness_id") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
