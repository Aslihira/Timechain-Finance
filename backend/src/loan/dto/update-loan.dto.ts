import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLoanDto } from './create-loan.dto';
import { IsOptional, IsEnum, IsNumber } from 'class-validator';
import { LoanRequestStatus } from '@prisma/client';

export class UpdateLoanDto extends PartialType(CreateLoanDto) {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(LoanRequestStatus)
  status?: LoanRequestStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  fundedAmount?: number;
}
