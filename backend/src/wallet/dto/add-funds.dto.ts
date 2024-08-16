import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '@prisma/client';

export class AddFundsDto {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  paymentMethod: PaymentMethod;
}
