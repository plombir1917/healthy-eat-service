import { IsInt } from 'class-validator';

export class CreateRecommendationDto {
  @IsInt()
  diet_id: number;
}
