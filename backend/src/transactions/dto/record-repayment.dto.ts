import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class RecordRepaymentDto {
  @ApiProperty()
  @IsNumber()
  @Min(0.01)
  amount: number;
}
