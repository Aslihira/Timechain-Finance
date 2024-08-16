-- AlterEnum
ALTER TYPE "PaymentMethod" ADD VALUE 'Wallet';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "paymentMethod" DROP NOT NULL,
ALTER COLUMN "isVerified" DROP NOT NULL;
