-- AlterTable
ALTER TABLE "request" ADD COLUMN     "recommendation_id" INTEGER;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_recommendation_id_fkey" FOREIGN KEY ("recommendation_id") REFERENCES "recommendation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
