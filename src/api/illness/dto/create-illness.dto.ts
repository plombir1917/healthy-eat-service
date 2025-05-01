import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIllnessDto {
  @ApiProperty({
    description: 'Название заболевания',
    example: 'Сахарный диабет',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Описание заболевания',
    example:
      'Хроническое заболевание, характеризующееся повышенным уровнем глюкозы в крови',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'ID пациента, у которого диагностировано заболевание',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  patient_id?: number;
}
