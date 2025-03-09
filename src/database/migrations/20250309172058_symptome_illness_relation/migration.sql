-- AlterTable
ALTER TABLE "symptome" ADD COLUMN     "illness_id" INTEGER;

-- AddForeignKey
ALTER TABLE "symptome" ADD CONSTRAINT "symptome_illness_id_fkey" FOREIGN KEY ("illness_id") REFERENCES "illness"("id") ON DELETE SET NULL ON UPDATE CASCADE;
