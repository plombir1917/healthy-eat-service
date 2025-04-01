import { Module } from '@nestjs/common';
import { SymptomeService } from './symptome.service';
import { SymptomeController } from './symptome.controller';

@Module({
  controllers: [SymptomeController],
  providers: [SymptomeService],
})
export class SymptomeModule {}
