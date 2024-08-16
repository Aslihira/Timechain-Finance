/*
  Warnings:

  - You are about to drop the column `BorrowerShare` on the `InterestDistribution` table. All the data in the column will be lost.
  - Added the required column `platformShare` to the `InterestDistribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "RepaymentStatus" ADD VALUE 'OVERDUE';

-- AlterTable
ALTER TABLE "InterestDistribution" DROP COLUMN "BorrowerShare",
ADD COLUMN     "platformShare" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "NPA" ALTER COLUMN "status" SET DEFAULT 'NPA';
