import { Module } from '@nestjs/common';
import { IllnessOnSymptomeService } from './illness-on-symptome.service';
import { IllnessOnSymptomeController } from './illness-on-symptome.controller';
import { IllnessOnSymptomeRepository } from './illness-on-symptome.repository';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IllnessOnSymptomeController],
  providers: [IllnessOnSymptomeService, IllnessOnSymptomeRepository],
})
export class IllnessOnSymptomeModule {}
