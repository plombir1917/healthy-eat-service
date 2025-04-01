/*
  Warnings:

  - You are about to drop the `_illnessTosymptome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_illnessTosymptome" DROP CONSTRAINT "_illnessTosymptome_A_fkey";

-- DropForeignKey
ALTER TABLE "_illnessTosymptome" DROP CONSTRAINT "_illnessTosymptome_B_fkey";

-- DropTable
DROP TABLE "_illnessTosymptome";

-- CreateTable
CREATE TABLE "illness_on_symptome" (
    "illness_id" INTEGER NOT NULL,
    "symptome_id" INTEGER NOT NULL,

    CONSTRAINT "illness_on_symptome_pkey" PRIMARY KEY ("illness_id","symptome_id")
);

-- AddForeignKey
ALTER TABLE "illness_on_symptome" ADD CONSTRAINT "illness_on_symptome_illness_id_fkey" FOREIGN KEY ("illness_id") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illness_on_symptome" ADD CONSTRAINT "illness_on_symptome_symptome_id_fkey" FOREIGN KEY ("symptome_id") REFERENCES "symptome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
