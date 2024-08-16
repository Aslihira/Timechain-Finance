-- CreateEnum
CREATE TYPE "RepaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "LoanRequestStatus" ADD VALUE 'FUNDED';
ALTER TYPE "LoanRequestStatus" ADD VALUE 'NPA';

-- CreateTable
CREATE TABLE "Repayment" (
    "repaymentID" TEXT NOT NULL,
    "borrowerID" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "loanID" TEXT NOT NULL,
    "repaymentDate" TIMESTAMP(3),
    "status" "RepaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Repayment_pkey" PRIMARY KEY ("repaymentID")
);

-- CreateTable
CREATE TABLE "InterestDistribution" (
    "interestID" SERIAL NOT NULL,
    "interestAmount" DOUBLE PRECISION NOT NULL,
    "loanID" TEXT NOT NULL,
    "lenderShare" DOUBLE PRECISION NOT NULL,
    "BorrowerShare" DOUBLE PRECISION NOT NULL,
    "distributorShare" DOUBLE PRECISION,

    CONSTRAINT "InterestDistribution_pkey" PRIMARY KEY ("interestID")
);

-- CreateTable
CREATE TABLE "NPA" (
    "npaID" TEXT NOT NULL,
    "loanID" TEXT NOT NULL,
    "status" "LoanRequestStatus" NOT NULL,
    "reason" TEXT NOT NULL,
    "dateMarked" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NPA_pkey" PRIMARY KEY ("npaID")
);

-- AddForeignKey
ALTER TABLE "Repayment" ADD CONSTRAINT "Repayment_borrowerID_fkey" FOREIGN KEY ("borrowerID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repayment" ADD CONSTRAINT "Repayment_loanID_fkey" FOREIGN KEY ("loanID") REFERENCES "LoanRequest"("loanRequestID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterestDistribution" ADD CONSTRAINT "InterestDistribution_loanID_fkey" FOREIGN KEY ("loanID") REFERENCES "LoanRequest"("loanRequestID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NPA" ADD CONSTRAINT "NPA_loanID_fkey" FOREIGN KEY ("loanID") REFERENCES "LoanRequest"("loanRequestID") ON DELETE RESTRICT ON UPDATE CASCADE;
