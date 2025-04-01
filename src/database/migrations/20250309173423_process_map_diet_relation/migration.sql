-- AlterTable
ALTER TABLE "process_map" ADD COLUMN     "diet_id" INTEGER;

-- AddForeignKey
ALTER TABLE "process_map" ADD CONSTRAINT "process_map_diet_id_fkey" FOREIGN KEY ("diet_id") REFERENCES "diet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
