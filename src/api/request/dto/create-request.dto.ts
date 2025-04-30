import { IsInt, IsOptional } from 'class-validator';

export class CreateRequestDto {
  @IsInt()
  doctor_id: number;

  @IsInt()
  patient_id: number;

  @IsInt()
  @IsOptional()
  recommendation_id?: number;
}
