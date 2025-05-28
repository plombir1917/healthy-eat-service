-- CreateEnum
CREATE TYPE "status" AS ENUM ('APPROVED', 'SEND', 'REJECTED');

-- AlterTable
ALTER TABLE "request" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'SEND';
