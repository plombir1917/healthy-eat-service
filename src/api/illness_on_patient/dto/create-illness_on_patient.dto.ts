import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIllnessOnPatientDto {
  @IsNotEmpty()
  @IsNumber()
  illness_id: number;

  @IsNotEmpty()
  @IsNumber()
  patient_id: number;
}
