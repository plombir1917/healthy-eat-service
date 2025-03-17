import { Module } from '@nestjs/common';
import { ProcessMapService } from './process_map.service';
import { ProcessMapController } from './process_map.controller';

@Module({
  controllers: [ProcessMapController],
  providers: [ProcessMapService],
})
export class ProcessMapModule {}
