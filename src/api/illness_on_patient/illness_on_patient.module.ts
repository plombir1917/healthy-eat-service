import { Module } from '@nestjs/common';
import { IllnessOnPatientService } from './illness_on_patient.service';
import { IllnessOnPatientController } from './illness_on_patient.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IllnessOnPatientController],
  providers: [IllnessOnPatientService],
})
export class IllnessOnPatientModule {}
