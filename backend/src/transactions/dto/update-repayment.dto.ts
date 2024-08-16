import { ApiProperty } from '@nestjs/swagger';
import { RepaymentStatus } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateRepaymentDto {
  @ApiProperty()
  @IsEnum(RepaymentStatus)
  status: RepaymentStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  repaymentDate: Date;
}
