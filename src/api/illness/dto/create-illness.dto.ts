import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateIllnessDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsOptional()
  patient_id?: number;
}
