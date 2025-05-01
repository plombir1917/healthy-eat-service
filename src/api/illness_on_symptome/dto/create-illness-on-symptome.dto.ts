import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIllnessOnSymptomeDto {
  @ApiProperty({
    description: 'ID заболевания',
    example: 1,
  })
  @IsInt()
  illness_id: number;

  @ApiProperty({
    description: 'ID симптома',
    example: 1,
  })
  @IsInt()
  symptome_id: number;
}
