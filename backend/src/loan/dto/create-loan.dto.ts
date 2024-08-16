import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateLoanDto {
  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  purpose: string;

  @ApiProperty()
  @IsNotEmpty()
  @Min(1)
  termMonths: number;

  @ApiProperty()
  @IsNotEmpty()
  @Max(100)
  interestRate: number;
}
