import { Module } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';
import { CharacteristicRepository } from './characteristic.repository';
import { PrismaModule } from '../../database/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [CharacteristicController],
  providers: [CharacteristicService, CharacteristicRepository],
})
export class CharacteristicModule {}
