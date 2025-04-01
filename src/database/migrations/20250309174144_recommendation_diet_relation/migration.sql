/*
  Warnings:

  - Added the required column `diet_id` to the `recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recommendation" ADD COLUMN     "diet_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "recommendation" ADD CONSTRAINT "recommendation_diet_id_fkey" FOREIGN KEY ("diet_id") REFERENCES "diet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
