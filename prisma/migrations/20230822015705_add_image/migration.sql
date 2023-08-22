/*
  Warnings:

  - Added the required column `image` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "image" TEXT NOT NULL;
