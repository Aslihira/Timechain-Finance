import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNpaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  reason: string;
}
