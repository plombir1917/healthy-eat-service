import { Module } from '@nestjs/common';
import { SymptomeService } from './symptome.service';
import { SymptomeController } from './symptome.controller';
import { SymptomeRepository } from './symptome.repository';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SymptomeController],
  providers: [SymptomeService, SymptomeRepository],
})
export class SymptomeModule {}
