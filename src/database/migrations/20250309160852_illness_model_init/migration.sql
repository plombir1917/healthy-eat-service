-- CreateTable
CREATE TABLE "illness" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "illness_pkey" PRIMARY KEY ("id")
);
