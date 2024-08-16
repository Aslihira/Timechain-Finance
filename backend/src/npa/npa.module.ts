import { Module } from '@nestjs/common';
import { NpaService } from './npa.service';
import { NpaController } from './npa.controller';

@Module({
  controllers: [NpaController],
  providers: [NpaService],
})
export class NpaModule {}
