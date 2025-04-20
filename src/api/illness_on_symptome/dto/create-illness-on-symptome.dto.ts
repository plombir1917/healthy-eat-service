import { IsInt } from 'class-validator';

export class CreateIllnessOnSymptomeDto {
  @IsInt()
  illness_id: number;

  @IsInt()
  symptome_id: number;
}
