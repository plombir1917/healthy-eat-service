/*
  Warnings:

  - You are about to drop the column `illness_id` on the `symptome` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "symptome" DROP CONSTRAINT "symptome_illness_id_fkey";

-- AlterTable
ALTER TABLE "symptome" DROP COLUMN "illness_id";

-- CreateTable
CREATE TABLE "_illnessTosymptome" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_illnessTosymptome_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_illnessTosymptome_B_index" ON "_illnessTosymptome"("B");

-- AddForeignKey
ALTER TABLE "_illnessTosymptome" ADD CONSTRAINT "_illnessTosymptome_A_fkey" FOREIGN KEY ("A") REFERENCES "illness"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_illnessTosymptome" ADD CONSTRAINT "_illnessTosymptome_B_fkey" FOREIGN KEY ("B") REFERENCES "symptome"("id") ON DELETE CASCADE ON UPDATE CASCADE;
