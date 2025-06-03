-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_doctor_id_fkey";

-- AlterTable
ALTER TABLE "request" ALTER COLUMN "doctor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
