import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { WalletService } from './wallet/wallet.service';
import { LoanModule } from './loan/loan.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NpaModule } from './npa/npa.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, WalletModule, LoanModule, TransactionsModule, NpaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
