import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WalletService {
  constructor(private readonly databaseService: DatabaseService) {}

  async addFunds(userId: string, amount: number, paymentMethod: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { userID: userId },
        include: { Wallet: true },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.Wallet) {
        const updatedWallet = await this.databaseService.wallet.update({
          where: { walletID: user.Wallet.walletID },
          data: {
            balance: user.Wallet.balance + amount,
          },
        });

        return {
          message: 'Funds added successfully.',
        };
      } else {
        const newWallet = await this.databaseService.wallet.create({
          data: {
            balance: amount,
            userID: userId,
          },
        });

        return {
          message: 'Funds added successfully.',
        };
      }
    } catch (error) {
      return error;
    }
  }
}
