import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { IllnessModule } from './illness/illness.module';
import { DietModule } from './diet/diet.module';
import { ProcessMapModule } from './process_map/process-map.module';
import { SymptomeModule } from './symptome/symptome.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { RequestModule } from './request/request.module';
import { IllnessOnSymptomeModule } from './illness_on_symptome/illness-on-symptome.module';

@Module({
  imports: [
    AdminModule,
    PatientModule,
    DoctorModule,
    IllnessModule,
    DietModule,
    ProcessMapModule,
    SymptomeModule,
    CharacteristicModule,
    RecommendationModule,
    RequestModule,
    IllnessOnSymptomeModule,
  ],
})
export class ApiModule {}
