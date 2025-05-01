import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecommendationDto {
  @ApiProperty({
    description: 'ID диеты, для которой создается рекомендация',
    example: 1,
  })
  @IsInt()
  diet_id: number;
}
