/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "LoanRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_walletID_fkey";

-- CreateTable
CREATE TABLE "LoanRequest" (
    "loanRequestID" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "purpose" TEXT NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "termMonths" INTEGER NOT NULL,
    "status" "LoanRequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "borrowerID" TEXT NOT NULL,
    "fundedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "LoanRequest_pkey" PRIMARY KEY ("loanRequestID")
);

-- CreateTable
CREATE TABLE "Funding" (
    "fundingID" TEXT NOT NULL,
    "loanID" TEXT NOT NULL,
    "lenderID" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Funding_pkey" PRIMARY KEY ("fundingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funding_lenderID_key" ON "Funding"("lenderID");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userID_key" ON "Wallet"("userID");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_borrowerID_fkey" FOREIGN KEY ("borrowerID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funding" ADD CONSTRAINT "Funding_loanID_fkey" FOREIGN KEY ("loanID") REFERENCES "LoanRequest"("loanRequestID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funding" ADD CONSTRAINT "Funding_lenderID_fkey" FOREIGN KEY ("lenderID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
