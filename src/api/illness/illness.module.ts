import { Module } from '@nestjs/common';
import { IllnessService } from './illness.service';
import { IllnessController } from './illness.controller';
import { IllnessRepository } from './illness.repository';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IllnessController],
  providers: [IllnessService, IllnessRepository],
})
export class IllnessModule {}
