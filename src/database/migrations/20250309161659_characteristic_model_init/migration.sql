-- CreateTable
CREATE TABLE "characteristic" (
    "id" SERIAL NOT NULL,
    "intolerance" TEXT NOT NULL,
    "preference" TEXT NOT NULL,

    CONSTRAINT "characteristic_pkey" PRIMARY KEY ("id")
);
