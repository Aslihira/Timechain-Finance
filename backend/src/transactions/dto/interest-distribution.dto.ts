import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class InterestDistributionDto {
  @ApiProperty()
  @Min(0.01)
  @IsNumber()
  interestAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  lenderShare: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  platformShare: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  distributorShare?: number;
}
