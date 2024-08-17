import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class InterestDistributionDto {
  @ApiProperty()
  @Min(0.01)
  @IsNumber()
  interestAmount: number;
}
