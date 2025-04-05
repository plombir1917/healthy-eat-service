import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { AdminModule } from './admin/admin.module';
import { IllnessModule } from './illness/illness.module';
import { IllnessOnSymptomeModule } from './illness_on_symptome/illness_on_symptome.module';
import { DietModule } from './diet/diet.module';
import { ProcessMapModule } from './process_map/process_map.module';
import { SymptomeModule } from './symptome/symptome.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { RequestModule } from './request/request.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    PatientModule,
    DoctorModule,
    AdminModule,
    IllnessModule,
    IllnessOnSymptomeModule,
    DietModule,
    ProcessMapModule,
    SymptomeModule,
    CharacteristicModule,
    RecommendationModule,
    RequestModule,
  ],
  providers: [],
  exports: [],
})
export class ApiModule {}
