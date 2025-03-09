-- CreateTable
CREATE TABLE "process_map" (
    "id" SERIAL NOT NULL,
    "dish_name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "cooking_process" TEXT NOT NULL,
    "proteins" INTEGER NOT NULL,
    "fats" INTEGER NOT NULL,
    "carbohydrates" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,

    CONSTRAINT "process_map_pkey" PRIMARY KEY ("id")
);
