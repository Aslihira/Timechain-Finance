import { Module } from '@nestjs/common';
import { NpaService } from './npa.service';
import { NpaController } from './npa.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NpaController],
  providers: [NpaService],
})
export class NpaModule {}
