-- CreateEnum
CREATE TYPE "role" AS ENUM ('DOCTOR', 'ADMIN', 'PATIENT');

-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "role" "role" NOT NULL DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "role" "role" NOT NULL DEFAULT 'DOCTOR';

-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "role" "role" NOT NULL DEFAULT 'PATIENT';
