import { Module } from '@nestjs/common';
import { ProcessMapService } from './process-map.service';
import { ProcessMapController } from './process-map.controller';
import { ProcessMapRepository } from './process-map.repository';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProcessMapController],
  providers: [ProcessMapService, ProcessMapRepository],
})
export class ProcessMapModule {}
