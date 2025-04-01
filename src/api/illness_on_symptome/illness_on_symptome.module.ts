import { Module } from '@nestjs/common';
import { IllnessOnSymptomeService } from './illness_on_symptome.service';
import { IllnessOnSymptomeController } from './illness_on_symptome.controller';

@Module({
  controllers: [IllnessOnSymptomeController],
  providers: [IllnessOnSymptomeService],
})
export class IllnessOnSymptomeModule {}
