import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class LoanFundingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  amount: number;
}
