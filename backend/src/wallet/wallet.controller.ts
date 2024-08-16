import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { AddFundsDto } from './dto/add-funds.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserID } from 'src/common/decorator/user-id.decorator';

@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('add-funds')
  async addFunds(
    @UserID() userID: string,
    @Body()
    { amount, paymentMethod }: AddFundsDto,
  ) {
    return this.walletService.addFunds(userID, amount, paymentMethod);
  }
}
